import { boardGameNftABI, mockErc721ABI, tokenizedVickeryAuctionABI, mockErc20ABI } from './generated';
const LKT_address = '0x40CA1cd6482790f79b4bd862070Ef1236274625F';
const QBT_address = '0x2f698CB14D8150785AcCbEd9d9544999631ec0dF';
const BGT_address = '0xab9b88e591AE6Df69F9B0765d83112814e22Ed05';
export const address_map = {
    // auction_address: '0x9CbAe8AE01DAb612BE8CB1c15E14f1934a4E2269',
    auction_address: '0xB77Cc508EA4E3Ceca9F2bA33C4AC182044A7233e',
    QBT_address,
    BGT_address,
    token_address: LKT_address,
    user_address: '0x94d3130C53288921Cd620b00f1e6Fd95aA8ACF2d'
}

export const tag_address = {
    LKT: LKT_address,
    QBT: QBT_address,
    BGT: BGT_address
}

export const AUCTION_CONTRACT = {
    address: address_map.auction_address,
    abi: tokenizedVickeryAuctionABI,
}

export const LKT_CONTRACT = {
    address: LKT_address,
    abi: mockErc20ABI
}

export const BGT_CONTRACT = {
    address: BGT_address,
    abi: boardGameNftABI,
}
export const QBT_CONTRACT = {
    address: QBT_address,
    abi: mockErc721ABI,
}