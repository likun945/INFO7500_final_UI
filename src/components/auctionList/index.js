import React, { useState, useEffect } from 'react';
import { Table, Badge, Space, Tooltip, Avatar } from 'antd';
import { useContractRead } from 'wagmi'
import { tokenizedVickeryAuctionABI } from '../../generated';
import { address_map, tag_address } from '../../constants'
import { QqOutlined } from '@ant-design/icons';
import BidModal from '../../components/bidModal';
import RevealModal from '../../components/revealModal';
import pic from '../../../src/random.png';

export default function () {
    const [tableData, setTableData] = useState()
    const { auction_address } = address_map;
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [revealModalVisible, setRevealModalVisible] = useState(false);
    const [reservePrice, setReservePrice] = useState(0);
    const [auctionInfo, setAuctionInfo] = useState({});
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };
    const showRevealModal = () => {
        setRevealModalVisible(true);
    }
    const handleRevealClose = () => {
        setRevealModalVisible(false);
    }
    const handleBid = (record) => {
        setReservePrice(record.reservePrice)
        setAuctionInfo(record);
        showModal();
    }
    const handleReveal = (record) => {
        setAuctionInfo(record);
        showRevealModal();
    }
    const handleEnd = () => {

    }
    const formatAddress = (addr) => {
        if (!addr) {
            return '';
        }
        return `${addr.substring(0, 4)}...${addr.substring(addr.length - 6)}`;
    };
    const columns = [
        {
            title: 'Index',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Seller',
            dataIndex: 'seller',
            key: 'seller',
            render: (text, record) => {
                return (
                    <Tooltip title={text}>{formatAddress(text)}</Tooltip>
                )
            }
        },
        {
            title: 'NFT type',
            dataIndex: 'nftType',
            key: 'nftType',
            render: (tokenAddress) => {
                let tokenName = "Unknown NFT";
                for (const key in tag_address) {
                    if (tag_address[key] === tokenAddress) {
                        tokenName = key;
                        break;
                    }
                }
                return (
                    <Space>
                        {
                            tokenName === 'QBT' ?
                                <Avatar size="small" icon={<QqOutlined />} /> :
                                <Avatar size="small" src={pic} />
                        }
                        <span>{tokenName}</span>
                    </Space>
                );
            }
        },
        {
            title: 'Token ID',
            dataIndex: 'nftId',
            key: 'nftId'
        },
        {
            title: 'Payment Token',
            dataIndex: 'erc20Token',
            key: 'erc20Token',
            render: (tokenAddress) => {
                let tokenName = "Unknown Token";
                for (const key in tag_address) {
                    if (tag_address[key] === tokenAddress) {
                        tokenName = key;
                        break;
                    }
                }
                return tokenName;
            }
        },
        {
            title: 'Reserve Price',
            dataIndex: 'reservePrice',
            key: 'reservePrice'
        },
        {
            title: 'Auction Start time',
            dataIndex: 'startTime',
            key: 'startTime',
            render: (timeStamp) => <span>{convertTimeStampToDate(timeStamp)}</span>
        },
        {
            title: 'Reveal Time',
            dataIndex: 'endOfRevealPeriod',
            key: 'endOfRevealPeriod',
            render: (timeStamp) => <span>{convertTimeStampToDate(timeStamp)}</span>
        },
        {
            title: 'Time to Reveal Bids',
            dataIndex: 'timeUntilRevealEnds',
            key: 'timeUntilRevealEnds',
            render: renderCountDown
        },
        {
            title: 'Auction End Time',
            dataIndex: 'endOfBiddingPeriod',
            key: 'endOfBiddingPeriod',
            render: (timeStamp) => <span>{convertTimeStampToDate(timeStamp)}</span>
        },
        {
            title: 'Time to Auction Close',
            dataIndex: 'timeUntilAuctionEnds',
            key: 'timeUntilAuctionEnds',
            render: (seconds) => {
                const days = Math.floor(seconds / (3600 * 24));
                const hours = Math.floor((seconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
                if (days > 0) {
                    return <span>{days}d {hours}h</span>;
                } else {
                    return <span>{hours}h {minutes}m {secs}s</span>;
                }
            }
        },
        {
            title: 'Bid Count',
            dataIndex: 'numBids',
            key: 'numBids'
        },
        {
            title: 'Status',
            width: 150,
            render: (record) => {
                const currentTime = Math.floor(Date.now() / 1000);
                let status, text;

                if (currentTime < record.startTime) {
                    // 拍卖未开始
                    status = "default";
                    text = "Pending";
                } else if (currentTime >= record.startTime && currentTime < record.endOfBiddingPeriod) {
                    // 拍卖正在进行
                    status = "processing";
                    text = "In Progress";
                } else if (currentTime >= record.endOfBiddingPeriod && currentTime < record.endOfRevealPeriod) {
                    // 揭示阶段
                    status = "success";
                    text = "Revealing";
                } else {
                    // 拍卖已结束
                    status = "error";
                    text = "Finished";
                }
                return <Badge status={status} text={text} />;
            }
        },
        {
            title: 'Action',
            render: (text, record, index) => {
                const currentTime = Math.floor(Date.now() / 1000);
                let isBidEnabled, isRevealEnabled, isEndEnabled;

                if (currentTime < record.startTime) {
                    // 拍卖未开始
                    isBidEnabled = false;
                    isRevealEnabled = false;
                    isEndEnabled = false;
                } else if (currentTime >= record.startTime && currentTime < record.endOfBiddingPeriod) {
                    // 拍卖正在进行
                    isBidEnabled = true;
                    isRevealEnabled = false;
                    isEndEnabled = false;
                } else if (currentTime >= record.endOfBiddingPeriod && currentTime < record.endOfRevealPeriod) {
                    // 揭示阶段
                    isBidEnabled = false;
                    isRevealEnabled = true;
                    isEndEnabled = false;
                } else {
                    // 拍卖已结束
                    isBidEnabled = false;
                    isRevealEnabled = false;
                    isEndEnabled = true;
                }

                return (
                    <Space size="middle">
                        <a onClick={handleBid.bind(this, record)} disabled={!isBidEnabled}>Bid</a>
                        <a onClick={handleReveal.bind(this, record)} disabled={!isRevealEnabled}>Reveal</a>
                        <a onClick={handleEnd} disabled={!isEndEnabled}>End</a>
                    </Space>
                );
            },
        }
    ];
    useContractRead({
        address: auction_address,
        abi: tokenizedVickeryAuctionABI,
        functionName: 'getAllAuctions',
        isRefetching: true,
        staleTime: 2000,
        onSuccess(data) {
            if (!data) {
                return;
            }
            const formattedData = data.map((auction, index) => {
                const highestBid = Number(auction.highestBid);
                const indexNumber = Number(auction.index);
                const numUnrevealedBids = Number(auction.numUnrevealedBids);
                const secondHighestBid = Number(auction.secondHighestBid);
                const reservePrice = Number(auction.reservePrice);
                const nftId = Number(auction.nftId);
                const numBids = Number(auction.numBids);
                const currentTime = Math.floor(Date.now() / 1000);
                return {
                    ...auction,
                    highestBid,
                    index: indexNumber,
                    numUnrevealedBids,
                    secondHighestBid,
                    reservePrice,
                    numBids,
                    nftId,
                    key: index + 1, // 或使用其他生成的唯一标识符
                    timeUntilRevealEnds: Math.max(0, auction.endOfBiddingPeriod - currentTime),
                    timeUntilAuctionEnds: Math.max(0, auction.endOfRevealPeriod - currentTime)
                };
            });
            console.log(formattedData)
            setTableData(formattedData);
            setLoading(false);
        }
    })
    useEffect(() => {
        const updateCountdown = () => {
            if (tableData) {
                const newTableData = tableData.map(auction => ({
                    ...auction,
                    timeUntilAuctionEnds: Math.max(auction.timeUntilAuctionEnds - 1, 0),
                    timeUntilRevealEnds: Math.max(auction.timeUntilRevealEnds - 1, 0)
                }));
                setTableData(newTableData);
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [tableData]);

    const convertTimeStampToDate = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        return date.toLocaleString();
    }
    function renderCountDown(seconds) {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (days > 0) {
            return <span>{days}d {hours}h {minutes}m</span>;
        } else {
            return <span>{hours}h {minutes}m {secs}s</span>;
        }
    }
    return (
        <div>
            <Table loading={loading} columns={columns} dataSource={tableData}></Table>
            {
                isModalVisible &&
                <BidModal
                    auctionInfo={auctionInfo}
                    reservePrice={reservePrice}
                    isModalVisible={isModalVisible}
                    onClose={handleClose}
                />
            }
            {
                revealModalVisible &&
                <RevealModal
                    isVisible={revealModalVisible}
                    auctionInfo={auctionInfo}
                    onClose={handleRevealClose}
                />
            }
        </div>
    )
}