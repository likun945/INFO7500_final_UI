import React, { useState, useEffect } from 'react';
import { Modal, Form, InputNumber, Button, message, Select, Option } from 'antd';
import { useSignMessage, useContractWrite } from 'wagmi'
// import { verifyMessage } from 'ethers';
import { LKT_CONTRACT, AUCTION_CONTRACT, address_map } from '../../constants';
import Web3 from 'web3';
import { generateCommitment } from '../../utils';
// import { ethers } from 'ethers';
const options = [
    {
        "id": 0,
        "name": "LKToken",
        "tag": "LKT",
        "contract_address": "0x40CA1cd6482790f79b4bd862070Ef1236274625F"
    }
];

const BidModal = ({ isModalVisible, onClose, reservePrice, auctionInfo }) => {
    const [bidPrice, setBidPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [approveLoading, setApproveLoading] = useState(false);
    const [commitment, setCommitment] = useState('');
    const [payment, setPayment] = useState(0);
    const { auction_address } = address_map;
    const { toWei } = Web3.utils;
    const nounce = "test";

    const localGenerateCommitment = () => {
        const commitment = generateCommitment(
            nounce,
            toWei(bidPrice, "ether"),
            auctionInfo.nftType, 
            auctionInfo.nftId, 
            auctionInfo.index
        )
        setCommitment(commitment);
        return commitment;
    }
    const { signMessage } = useSignMessage({
        onSuccess(data, variables) {
            const result_commitment = localGenerateCommitment();
            handleCommitBid(result_commitment);
        },
    });
    const { write: commitBid } = useContractWrite({
        ...AUCTION_CONTRACT,
        functionName: 'commitBid',
        onSuccess(data) {
            showSuccess(data)
            showBidMessage(commitment);
            onClose();
        }
    })
    const { write: approve } = useContractWrite({
        ...LKT_CONTRACT,
        functionName: 'approve',
        onSuccess(data) {
            showSuccess(data);//show approve success message
            setApproveLoading(false);//remove approve button loading
            setIsLoading(true);//set submit form button loading
            setTimeout(() => {
                setIsLoading(false);//set submit form button not loading
                setIsApproved(true);//set submit button enabled
            }, 5000)
        },
        onError(error) {
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
            setApproveLoading(false);
        }
    })
    const showSuccess = (data) => {
        messageApi.open({
            type: 'success',
            content: `The Transacation hash is ${data.hash}`
        });
    }
    const handleOk = async () => {
        setIsLoading(true);
        signMessage({
            message: bidPrice + ''
        });
    };

    const handleCancel = () => {
        onClose();
    };

    const onBidPriceChange = (value) => {
        setBidPrice(value);
    };

    const showBidMessage = (commitment) => {
        messageApi.success({
            content: `Bid successful! Your nonce is ${nounce}. Please keep it safe. Commitment : (${commitment})`,
            duration: 5
        });
    };
    const handleApprove = (commitment) => {
        setApproveLoading(true); //set approve button loading
        approve({
            args: [auction_address, toWei(bidPrice, "ether")]
        })
    }
    const handleCommitBid = (result_commitment) => {
        if (auctionInfo) {
            const args = [
                auctionInfo.nftType,
                auctionInfo.nftId,
                result_commitment,
                toWei(bidPrice, "ether")
            ]
            // console.log(args);
            commitBid({ args })
        } else {
            console.error('error');
        }
    }
    useEffect(() => {
        if (reservePrice > 0) {
            setBidPrice(reservePrice);
        }
    }, [reservePrice]);
    return (
        <Modal
            title="Place Your Bid"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Sign and Submit"
            okButtonProps={{
                disabled: !isApproved
            }}
            confirmLoading={isLoading}
        >
            {contextHolder}
            <Form layout="vertical">
                <Form.Item label="Payment Token">
                    <Select placeholder="Choose payment token" value={payment} defaultValue={payment}>
                        {
                            options.map((option, index) => (
                                <Select.Option key={option.id} value={option.id}>{`${option.tag}(${option.name})`}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label={`Bid Price (min: ${reservePrice})`}>
                    <InputNumber
                        min={reservePrice}
                        step={0.01}
                        value={bidPrice}
                        onChange={onBidPriceChange}
                        style={{ width: 'calc(100% - 150px)', marginRight: '10px' }}
                    />
                    <Button loading={approveLoading} type="primary" onClick={handleApprove}>Approve</Button>
                </Form.Item>
                <Form.Item>
                    <b>Deposit Required</b><span>: {bidPrice}</span>
                </Form.Item>
            </Form>
        </Modal>
    );

};

export default BidModal;
