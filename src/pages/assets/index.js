import React, { useEffect, useState } from 'react';
import { Button, Statistic, Spin, List, Image, Col, Segmented, Row, Avatar } from 'antd';
import Web3 from 'web3';
import { useContractRead, useAccount } from 'wagmi'
import { mockErc20ABI, boardGameNftABI, mockErc721ABI } from '../../generated';
import { address_map, generate_qbt_img, generate_bgt_img } from '../../constants';
import pic from '../../../src/random.png';
import animal from '../../../src/animal.png';
import { useNavigate } from 'react-router-dom';

export default function Assets() {
    const [tokenAmount, setTokenAmount] = useState('')
    const [showWei, setShowWei] = useState(true);
    const [qbAsset, setQbAsset] = useState([]);
    const [bgAsset, setBgAsset] = useState([]);
    const [countOfNFT, setCountOfNFT] = useState(0);
    const [currentList, setCurrentList] = useState('qbt');
    const { token_address, BGT_address, QBT_address } = address_map;
    const { address } = useAccount();
    const navigate = useNavigate();
    const base_url = "https://testnets.opensea.io/assets/sepolia";
    const { isLoading } = useContractRead({
        address: token_address,
        abi: mockErc20ABI,
        functionName: 'balanceOf',
        args: [address],
        onSuccess(data) {
            setTokenAmount(data);
        }
    })
    useContractRead({
        address: BGT_address,
        abi: boardGameNftABI,
        functionName: 'tokensOfOwner',
        args: [address],
        onSuccess(data) {
            const formattedData = data.map(item => {
                if (item <= Number.MAX_SAFE_INTEGER) {
                    return Number(item);
                }
            });
            setBgAsset(formattedData);
        },

        onError(error) {
            console.log(error);
        }
    })
    console.log(qbAsset)
    useContractRead({
        address: QBT_address,
        abi: mockErc721ABI,
        functionName: 'tokensOfOwner',
        args: [address],
        onSuccess(data) {
            const formattedData = data.map(item => {
                if (item <= Number.MAX_SAFE_INTEGER) {
                    return Number(item);
                }
            });
            setQbAsset(formattedData);
        },

        onError(error) {
            console.log(error);
        }
    })
    const { fromWei } = Web3.utils;
    const handleClick = () => {
        setShowWei(!showWei);
    }
    const handleToggle = (val) => {
        setCurrentList(val);
    }
    useEffect(() => {
        setCountOfNFT(qbAsset.length + bgAsset.length)
    }, [qbAsset, bgAsset])
    return (
        <div style={{ background: '#eee' }}>
            <Row>
                <Col span={4} offset={3} style={{marginTop:'15px'}}>
                    <Button onClick={() => {navigate('/')}}>Back</Button>
                </Col>
            </Row>
            <Spin tip="Loading..." spinning={isLoading}>
                <Row style={{ 'marginTop': '5px', 'paddingTop': '20px', 'paddingBottom': '20px' }}>
                    <Col span={9} offset={3}>
                        <div>
                            <Statistic title="Account Balance(LKToken)" value={showWei ? tokenAmount + ' wei' : fromWei(tokenAmount, "ether")} />
                            <Button onClick={handleClick}>Convert</Button>
                        </div>
                    </Col>
                    <Col span={9} offset={3}>
                        <Statistic title="Total NFT quantity" value={countOfNFT} />
                    </Col>
                </Row>
            </Spin>
            
            <Row>
                <Col span={16} offset={3}>
                    <Segmented
                        onChange={handleToggle}
                        defaultValue={currentList}
                        options={[
                            {
                                label: (
                                    <div style={{ padding: 4 }}>
                                        <Avatar src={animal} />
                                        <div>QBT</div>
                                    </div>
                                ),
                                value: 'qbt',
                            },
                            {
                                label: (
                                    <div style={{ padding: 4 }}>
                                        <Avatar src={pic} />
                                        <div>BGT</div>
                                    </div>
                                ),
                                value: 'bgt',
                            }
                        ]}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={16} offset={3}>
                    <List
                        itemLayout="horizontal"
                        dataSource={currentList === 'bgt' ? bgAsset : qbAsset}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Button type='link' onClick={() => window.open(`${base_url}/${currentList === 'bgt' ? BGT_address:QBT_address}/${item}`, '_blank')}>TokenId {item}</Button>}
                                    description={<Image 
                                        width={200}
                                        height={200}
                                        src={
                                        currentList === 'bgt'?
                                        generate_bgt_img(item):
                                        generate_qbt_img(item)
                                    } />}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
}