import React, { useEffect, useState } from 'react';
import { Button, Input, Select, Row, Col, Form, Spin, message, InputNumber } from 'antd';
import { useContractWrite } from 'wagmi';
import { mockErc20ABI } from '../../generated';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';

const { Option } = Select;
const options = [
  {
    "id": 0,
    "name": "LKToken",
    "tag": "LKT",
    "contract_address": "0x40CA1cd6482790f79b4bd862070Ef1236274625F"
  }
];

export default function MintNFT() {
  const [form] = Form.useForm();
  const { address } = useAccount()
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { toWei } = Web3.utils;
  const { write, isLoading } = useContractWrite({
    address: options[0].contract_address,
    abi: mockErc20ABI,
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
        const { nftType, recipientAddress, tokenQuantity } = values;
        const valueInEther = toWei(tokenQuantity, 'ether');
        if (nftType === 0) {
          write({
            args: [recipientAddress, valueInEther]
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
      <Spin tip="Loading..." spinning={isLoading}>
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
              <Form.Item
                label="Token Quantity"
                name="tokenQuantity"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the number of tokens to mint!'
                  },
                  {
                    type: 'number',
                    min: 1,
                    message: 'The number of tokens must be at least 1'
                  },
                  {
                    type: 'number',
                    max: 1000,
                    message: 'You cannot mint more than 1000 tokens at a time'
                  }
                ]}
              >
                <InputNumber min={1} style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" block onClick={handleMint}>
                  Mint Token
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
