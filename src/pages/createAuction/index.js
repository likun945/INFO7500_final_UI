import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, InputNumber, Row, Col, Input, Spin, message, Space } from 'antd';
import { useAccount, useContractReads, useContractWrite } from 'wagmi';
import { address_map, BGT_CONTRACT, QBT_CONTRACT, AUCTION_CONTRACT } from '../../constants';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const AuctionForm = () => {
    const [form] = Form.useForm();
    const { token_address, QBT_address, BGT_address, auction_address } = address_map;
    const { address } = useAccount();
    const [assets, setAssets] = useState([]);
    const [availableNFT, setAvailableNFT] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [submitLoading, setSubmitLoading] = useState(false);
    const { write: writeAuction } = useContractWrite({
        ...AUCTION_CONTRACT,
        functionName: 'createAuction',
        onSuccess(data) {
            showSuccess(data);
            setSubmitLoading(false);
            setTimeout(() => {
                navigate('/')
            }, 3000);
        },
        onError(error) {
            console.log(error)
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
            setSubmitLoading(false);
        }
    })
    const { write: bgtApprove } = useContractWrite({
        ...BGT_CONTRACT,
        functionName: 'approve',
        onSuccess(data) {
            showSuccess(data);
            setLoading(false);
        },
        onError(error) {
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
            setLoading(false);
        }
    })
    const { write: qbtApprove } = useContractWrite({
        ...QBT_CONTRACT,
        functionName: 'approve',
        onSuccess(data) {
            showSuccess(data);
            setLoading(false);
        },
        onError(error) {
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
            setLoading(false);
        }
    })
    const showSuccess = (data) => {
        messageApi.open({
            type: 'success',
            content: `Your transacation hash is ${data.hash}`,
        });
    }
    const options = [
        {
            "id": 0,
            "name": "QBToken",
            "tag": "QBT",
            "contract_address": QBT_address
        },
        {
            "id": 1,
            "name": "BoardgameToken",
            "tag": "BGT",
            "contract_address": BGT_address
        }
    ];
    const daysToTimestamp = (days) => days * 86400;
    const onFinish = (values) => {
        setSubmitLoading(true);
        let auctionStartTimeTimestampInSeconds = Math.floor(values.auctionStartTime.valueOf() / 1000);

        const { nftTypeID, nftTokenId, startingPrice, erc20ContractAddress, bidPeriod,
            revealPeriod } = values;
        const nftAddress = options[nftTypeID].contract_address;
        const args = [
            nftAddress,
            nftTokenId,
            erc20ContractAddress,
            auctionStartTimeTimestampInSeconds,
            bidPeriod,
            revealPeriod,
            startingPrice
        ]
        writeAuction({
            args
        })
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const transform = (data) => {
        return data.map(item => {
            if (item.status === 'success') {
                return {
                    ...item,
                    result: item.result.map(bigIntValue => {
                        if (bigIntValue <= Number.MAX_SAFE_INTEGER) {
                            return Number(bigIntValue);
                        } else {
                            return bigIntValue;
                        }
                    })
                };
            } else {
                return item;
            }
        });
    }
    useContractReads({
        contracts: [
            {
                ...QBT_CONTRACT,
                functionName: 'tokensOfOwner',
                args: [address]
            },
            {
                ...BGT_CONTRACT,
                functionName: 'tokensOfOwner',
                args: [address]
            }
        ],
        select: (data) => transform(data),
        onSuccess(data) {
            setAssets(data);
        }
    })
    const onFormValuesChange = (changedValues) => {
        const { nftTypeID } = changedValues;
        if (assets.length > 0 && (nftTypeID || nftTypeID === 0)) {
            const nftAssets = assets[nftTypeID];
            if (nftAssets) {
                setAvailableNFT(nftAssets.result);
            }
        }
    };
    const handleApprove = async () => {
        try {
            const values = await form.validateFields(['nftTypeID', 'nftTokenId']);
            const nftType = values.nftTypeID;
            const nftTokenId = values.nftTokenId;
            setLoading(true)
            if (nftType === 0) {
                qbtApprove({
                    args: [auction_address, nftTokenId]
                });
            } else {
                bgtApprove({ args: [auction_address, nftTokenId] });
            }
        } catch (error) {
            console.error("Validation error:", error);
        }
    }
    const handleBack = () => {
        navigate('/');
    }
    return (
        <div style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center' }}>
            {contextHolder}
            <Form
                onValuesChange={onFormValuesChange}
                form={form}
                onFinish={onFinish}
                style={{ maxWidth: '500px', width: '100%' }}
            >
                <Form.Item name="seller" label="Seller" rules={[{ required: true }]} initialValue={address}>
                    <Input disabled={true} ></Input>
                </Form.Item>
                <Form.Item name="nftTypeID" label="NFT Type" rules={[{ required: true, message: 'Please select your NFT type' }]}>
                    <Select placeholder="Select a NFT type">
                        {
                            options.map((option, index) => (
                                <Option key={option.id} value={option.id}>{`${option.tag}(${option.name})`}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Spin spinning={loading} tip="Loading...">
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item name="nftTokenId" label="NFT Token ID" rules={[{ required: true, message: 'Please select your NFT token ID' }]}>
                                <Select placeholder="Select a Token ID">
                                    {
                                        availableNFT.map((token, index) => {
                                            return <Option key={index} value={token}>TokenID {token}</Option>
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" onClick={handleApprove}>Approve</Button>
                        </Col>
                    </Row>
                </Spin>
                <Form.Item
                    name="erc20ContractAddress"
                    label="ERC20 Token"
                    rules={[{ required: true, message: 'Please select an ERC20 token!' }]}
                >
                    <Select placeholder="Select ERC20 Token">
                        <Select.Option value={token_address}>LKT</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="auctionStartTime" label="Auction Start Time" rules={[{ required: true }]}>
                    <DatePicker showTime />
                </Form.Item>

                <Form.Item name="bidPeriod" label="Bid Period" rules={[{ required: true }]}>
                    <Select placeholder="Select bid period">
                        <Option value={60}>60 seconds(for testing)</Option>
                        <Option value={600}>600 seconds(for testing)</Option>
                        <Option value={daysToTimestamp(3)}>3 Days</Option>
                        <Option value={daysToTimestamp(7)}>7 Days</Option>
                        <Option value={daysToTimestamp(30)}>1 Month</Option>
                        <Option value={daysToTimestamp(90)}>3 Months</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="revealPeriod" label="Reveal Period" rules={[{ required: true }]}>
                    <Select placeholder="Select reveal period">
                        <Option value={daysToTimestamp(3)}>3 Days</Option>
                        <Option value={daysToTimestamp(7)}>7 Days</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="startingPrice" label="Starting Price" rules={[{ required: true }]}>
                    <InputNumber min={1} />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                    <Space>
                        <Spin spinning={submitLoading}>
                        <Button type="primary" htmlType="submit">
                            Create Auction
                        </Button>
                        </Spin>
                        <Button onClick={handleBack}>Back Home</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AuctionForm;
