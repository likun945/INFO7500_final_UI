import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Button, message, Typography, Tag, Divider } from 'antd';
import { generateCommitment } from '../../utils';
import { useContractWrite, useContractRead, useAccount } from 'wagmi';
import { AUCTION_CONTRACT } from '../../constants';
import { ethers } from 'ethers';
import Web3 from 'web3';

const RevealBidModal = ({ isVisible, onClose, auctionInfo }) => {
    const { toWei, fromWei } = Web3.utils;
    const [bidPrice, setBidPrice] = useState(0.01); // 初始化为最小值
    const [nonce, setNonce] = useState('');
    const [foundRecord, setFoundRecord] = useState(false);
    const [commitment, setCommitment] = useState('');
    const [transacationHash, setTransacationHash] = useState('');
    const [pastPrice, setPastPrice] = useState('');
    const [displayHighestBid, setDisplayHighestBid] = useState(fromWei(auctionInfo.highestBid, "ether"));
    const [displaySecondBid, setDisplaySecondBid] = useState(fromWei(auctionInfo.secondHighestBid, "ether"));
    const [isHighestBidder, setIsHighestBidder] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const { Text } = Typography;
    const { address } = useAccount();
    const { write: revealBid } = useContractWrite({
        ...AUCTION_CONTRACT,
        functionName: 'revealBid',
        onSuccess(data) {
            setFoundRecord(true);
            setTransacationHash(data.hash);
            message.success(`Bid record found!`);
        },
        onError(error) {
            message.error(error);
        }
    })
    useContractRead({
        ...AUCTION_CONTRACT,
        functionName: 'getBid',
        args: [
            auctionInfo.nftType,
            auctionInfo.nftId,
            auctionInfo.index,
            address
        ],
        onSuccess(data) {
            if (data && data.length === 3) {
                data[1] = Number(fromWei(data[1], "ether"))
            }
            setIsRevealed(data[2]);
            if (data[2]) {
                setFoundRecord(true);
            }
            setCommitment(data[0]);
            setPastPrice(data[1]);
        }
    })
    const handleSubmit = () => {
        if (nonce === 'test') {
            const nonceBytes32 = ethers.utils.formatBytes32String(nonce);
            const localCommitment = generateCommitment(nonce, toWei(bidPrice, "ether"), auctionInfo.nftType, auctionInfo.nftId, auctionInfo.index);
            if (commitment && localCommitment === commitment) {
                const args = [
                    auctionInfo.nftType,
                    ethers.BigNumber.from(auctionInfo.nftId).toString(), // tokenId, 转换为字符串
                    ethers.utils.parseUnits(bidPrice + "", "ether").toString(),
                    nonceBytes32
                ];
                revealBid({ args });
                decideWinner();
                return;
            }
        }
        setFoundRecord(false);
        message.error('Nonce is incorrect, please retry.');
    };
    const decideWinner = () => {
        if (bidPrice > displayHighestBid) {
            setDisplayHighestBid(bidPrice);
            setIsHighestBidder(address);
            return;
        } 
        else if (bidPrice > displaySecondBid) {
            setDisplaySecondBid(bidPrice);
        }
    }
    const modalFooterButtons = foundRecord ? (
        <Button key="close" onClick={onClose}>
            Close
        </Button>
    ) : (
        <Button key="submit" type="primary" onClick={handleSubmit}>
            Reveal
        </Button>
    );
    return (
        <Modal
            title="Reveal Your Bid"
            open={isVisible}
            onCancel={onClose}
            footer={[modalFooterButtons]}
        >
            {!foundRecord && !isRevealed && (
                <Form layout="vertical">
                    <Form.Item label="NFT Type">
                        <Input value={auctionInfo.nftType} disabled />
                    </Form.Item>
                    <Form.Item label="NFT ID">
                        <Input value={auctionInfo.nftId} disabled />
                    </Form.Item>
                    <Form.Item label="Bid Price">
                        <InputNumber
                            min={0.01}
                            step={0.01}
                            value={bidPrice}
                            onChange={value => setBidPrice(value)}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item label="Nonce">
                        <Input value={nonce} onChange={e => setNonce(e.target.value)} />
                    </Form.Item>
                </Form>
            )}
            {foundRecord && (
                <div>
                    <Divider />
                    <div>
                        <Text strong>Current Highest Bidder: </Text>
                        {address === auctionInfo.highestBidder || isHighestBidder ? (
                            <Text strong style={{ color: 'green' }}>It's you</Text>
                        ) : (
                            <Text copyable>{auctionInfo.highestBidder}</Text>
                        )}
                    </div>
                    <div style={{ 'lineHeight': '32px' }}>
                        <Text strong>Current Highest Bid: </Text><Tag color='blue'> {displayHighestBid} LKT</Tag>
                    </div>
                    <div>
                        <Text strong>Second Highest Bid: </Text><Tag color='blue'>{displaySecondBid} LKT</Tag>
                    </div>
                    <Divider />
                    <div>
                        <Text strong>Original Commitment:</Text> <Text copyable>{commitment}</Text>
                    </div>
                    {
                        transacationHash &&
                        <div>
                            <Text strong>Transaction Hash:</Text> <Text copyable>{transacationHash}</Text>
                        </div>
                    }
                    <div>
                        <Text strong>Bid Amount: </Text> <Tag color='blue'>{pastPrice} LKT</Tag>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default RevealBidModal;
