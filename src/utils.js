import { ethers } from 'ethers';
export function generateCommitment(nonce, bidValue, tokenContract, tokenId, auctionIndex) {
    bidValue = ethers.BigNumber.from(bidValue);
    tokenId = ethers.BigNumber.from(tokenId); 
    auctionIndex = ethers.BigNumber.from(auctionIndex);
    const encoded = ethers.utils.defaultAbiCoder.encode(
        ["string", "uint96","string", "uint256", "uint256"],
        [nonce, bidValue, tokenContract, tokenId, auctionIndex]
    );
    const hashed = ethers.utils.keccak256(encoded);
    return ethers.utils.hexDataSlice(hashed, 0, 20);
}

// const nonce = ethers.utils.formatBytes32String("your_nonce"); // 示例nonce值，转换为bytes32
// const bidValue = ethers.BigNumber.from("20"); // 将出价转换为uint96
// const tokenContract = "0x..."; // ERC721合约地址
// const tokenId = ethers.BigNumber.from("1"); // NFT的Token ID，转换为uint256
// const auctionIndex = ethers.BigNumber.from("0"); // 拍卖索引，转换为uint256

// const commitment = generateCommitment(nonce, bidValue, tokenContract, tokenId, auctionIndex);
// console.log(commitment);
