import React from 'react';
import { Button, Flex, Space, Tooltip, Dropdown } from 'antd';
import { SketchOutlined, MoneyCollectOutlined, TagOutlined, EyeOutlined, DisconnectOutlined, UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function () {
    const navigate = useNavigate();
    const { address, isConnecting, isDisconnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect()
    const formatAddress = (addr) => {
        if (!addr) {
            return '';
        }
        return `Current Address: ${addr.substring(0, 4)}...${addr.substring(addr.length - 6)}`;
    };
    const items = connectors.map((connector, index) => {
        return {
            key: index,
            label: (
                <span onClick={() => connect({ connector })} disabled={!connector.ready}>
                  {connector.name}
                </span>
            )
        }
    })
    return (
        <div style={{ margin: '15px' }}>
            
            <Flex
                wrap="wrap"
                gap="small"
                className="site-button-ghost-wrapper"
                style={{ justifyContent: 'space-between' }}
            >
                {
                    (address && !isDisconnected) ? <Flex wrap="wrap" gap="small" >
                                    <Button
                                        type="default"
                                        icon={<SketchOutlined />}
                                        onClick={() => navigate('/mint-nft')}
                                    >
                                        Mint NFT
                                    </Button>
                                    <Button
                                        type="dashed"
                                        icon={<MoneyCollectOutlined />}
                                        onClick={() => navigate('/mint-erc20')}
                                    >
                                        Mint ERC20 token
                                    </Button>
                                    <Button
                                        type="primary"
                                        icon={<TagOutlined />}
                                        onClick={() => navigate('/auction/create')}
                                    >
                                        Start Auction
                                    </Button>
                                </Flex>:null
                }
                <Space>
                    {
                        (address && !isDisconnected) ?
                            <Space>
                                <Button
                                    type="ghost"
                                    icon={<EyeOutlined />}
                                    onClick={() => navigate('/view-assets')}
                                >
                                    View My Assets
                                </Button>
                                <Tooltip title={address}>
                                    <span>{formatAddress(address)}</span>
                                </Tooltip>
                                <Button icon={<DisconnectOutlined />} type="text" danger onClick={() => disconnect()}>Disconnect</Button>
                            </Space>
                            :
                            <div>
                                <Dropdown menu={{ items }}>
                                    <Button type="ghost" icon={<UserAddOutlined />}>Connect</Button>
                                </Dropdown>
                            </div>
                    }
                </Space>
            </Flex>
        </div>
    )
}
