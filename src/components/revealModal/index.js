import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Button, message, Typography, Tag, Divider, Badge } from 'antd';
import { generateCommitment } from '../../utils';
import { useContractWrite, useContractRead, useAccount } from 'wagmi';
import { AUCTION_CONTRACT } from '../../constants';
import { ethers } from 'ethers';
import Web3 from 'web3';

const RevealBidModal = ({ isVisible, onClose, auctionInfo }) => {
    const [bidPrice, setBidPrice] = useState(0.01); // 初始化为最小值
    const [nonce, setNonce] = useState('');
    const [foundRecord, setFoundRecord] = useState(false);
    const [commitment, setCommitment] = useState('');
    const [transacationHash, setTransacationHash] = useState('');
    const [pastPrice, setPastPrice] = useState('');
    const { toWei, fromWei } = Web3.utils;
    const { Text } = Typography;
    const { address } = useAccount();
    // const c = generateCommitment(
    //     "test",
    //     toWei(5, "ether"),
    //     "0x2f698cb14d8150785accbed9d9544999631ec0df",
    //     10,
    //     1
    // )
    // console.log(c)
    const { write: revealBid } = useContractWrite({
        ...AUCTION_CONTRACT,
        functionName: 'revealBid',
        onSuccess(data) {
            setFoundRecord(true);
            setTransacationHash(data.hash);
            message.success(`Bid record found!`);
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
            if (data && data.length === 2) {
                data[1] = Number(fromWei(data[1], "ether"))
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
                    ethers.utils.parseUnits("5", "ether").toString(),
                    nonceBytes32
                ];
                revealBid({ args })
            }
        } else {
            setFoundRecord(false);
            message.error('Nonce is incorrect, please retry.');
        }
    };
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
            {!foundRecord && (
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
                        {address === auctionInfo.highestBidder ? (
                            <Text strong style={{ color: 'green' }}>It's you</Text>
                        ) : (
                            <Text copyable>{auctionInfo.highestBidder}</Text>
                        )}
                    </div>
                    <div style={{'lineHeight': '32px'}}>
                        <Text strong>Current Highest Bid: </Text><Tag color='blue'> {fromWei(auctionInfo.highestBid, "ether")} LKT</Tag>
                    </div>
                    <div>
                        <Text strong>Second Highest Bid: </Text><Tag color='blue'>{fromWei(auctionInfo.secondHighestBid, "ether")} LKT</Tag> 
                    </div>
                    <Divider />
                    <div>
                        <Text strong>Original Commitment:</Text> <Text copyable>{commitment}</Text>
                    </div>
                    <div>
                        <Text strong>Transaction Hash:</Text> <Text copyable>{transacationHash}</Text>
                    </div>
                    <div>
                        <Text strong>Bid Amount: </Text> <Tag color='blue'>{pastPrice} LKT</Tag>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default RevealBidModal;
