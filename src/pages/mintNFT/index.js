import React, { useEffect, useState } from 'react';
import { Button, Input, Select, Row, Col, Form, Spin, message } from 'antd';
import { useContractWrite } from 'wagmi';
import { mockErc721ABI, boardGameNftABI } from '../../generated';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { address_map } from '../../constants';

const { Option } = Select;
const { QBT_address, BGT_address} = address_map;
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

export default function MintNFT() {
    const [form] = Form.useForm();
    const { address } = useAccount()
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { write: QBTWrite, isLoading: qbtLoading, data: qbtData } = useContractWrite({
        address: options[0].contract_address,
        abi: mockErc721ABI,
        functionName: 'mint',
        onSuccess(data) {
            showSuccess(data);
        },
        onError(error) {
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
        }
    });
    const { write: BGTWrite, isLoading: bgtLoading, data: bgtData } = useContractWrite({
        address: options[1].contract_address,
        abi: boardGameNftABI,
        functionName: 'mint',
        onSuccess(data) {
            showSuccess(data)
        },
        onError(error) {
            messageApi.open({
                type: 'error',
                content: `Error message: ${error}`,
            });
        }
    })
    const showSuccess = (data) => {
        messageApi.open({
            type: 'success',
            content: `Your transacation hash is ${data.hash}`,
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);
    }
    const handleBackHome = () => {
        navigate('/')
    }
    const handleMint = () => {
        form.validateFields()
            .then(values => {
                const { nftType, recipientAddress } = values;
                if (nftType === 0) {
                    QBTWrite({
                        args: [recipientAddress]
                    })
                } else {
                    BGTWrite({
                        args: [recipientAddress, 'https://files.oaiusercontent.com/file-BJ0cfKWmneisofHuAqumkjts?se=2023-12-03T22%3A14%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da7b3becd-cdc0-4f34-9121-83717d85298b.webp&sig=1mDoE4DFrDFK1K9rt7%2BdL0X9I1k2rsbTpYI3RNM5N7E%3D']
                    })
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };
    useEffect(() => {
        if (address) {
            form.setFieldsValue({
                recipientAddress: address,
            });
        }
    }, [address, form]);
    return (
        <div>
            {contextHolder}
            <Spin tip="Loading..." spinning={qbtLoading || bgtLoading}>
                <Row gutter={16} style={{ marginTop: '20px' }}>
                    <Col span={12} offset={6}>
                        <Form form={form} layout="vertical">
                            <Form.Item
                                label="Recipient Address"
                                name="recipientAddress"
                                rules={[{ required: true, message: 'Please input the recipient address!' }]}
                            >
                                <Input
                                    placeholder="Enter recipient address"
                                />
                            </Form.Item>
                            <Form.Item
                                label="NFT Type"
                                name="nftType"
                                rules={[{ required: true, message: 'Please select the NFT type!' }]}
                            >
                                <Select
                                    placeholder="Choose NFT type"
                                    onChange={value => form.setFieldsValue({ nftType: value })}
                                >
                                    {
                                        options.map((option, index) => (
                                            <Option key={option.id} value={option.id}>{`${option.tag}(${option.name})`}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block onClick={handleMint}>
                                    Mint NFT
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="default" block onClick={handleBackHome}>
                                    Back Home
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Spin>
        </div>

    );
}
