import React, { useEffect } from 'react';
import AuctionList from '../../components/auctionList';
import NavBar from '../../components/navBar';

export default function () {
    return (
        <div>
            <NavBar />
            <AuctionList/>
        </div>
    )
}