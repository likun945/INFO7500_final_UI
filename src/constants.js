import { boardGameNftABI, mockErc721ABI, tokenizedVickeryAuctionABI, mockErc20ABI } from './generated';
const LKT_address = '0x40CA1cd6482790f79b4bd862070Ef1236274625F';
// const QBT_address = '0x2f698CB14D8150785AcCbEd9d9544999631ec0dF';
const QBT_address = '0x6b38F52Df3e78D19007A41fC63F0992031935dc1'; //ANT
const BGT_address = '0x0aC7D1c557F013F0718646f1792763892f115d2d';
export const address_map = {
    auction_address: '0xD63E6c887691736977b0bb8a8fb71015cc4AF6B4',
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

export const QBT_IMG_URL = 'https://firebasestorage.googleapis.com/v0/b/planar-hangout-366503.appspot.com/o/image%2F';

export function generate_qbt_img(token_id) {
    return QBT_IMG_URL.concat(`${token_id}.jpg?alt=media`);
}
export const BGT_IMG_URL = 'https://firebasestorage.googleapis.com/v0/b/planar-hangout-366503.appspot.com/o/bgt_image%2F';

export function generate_bgt_img(token_id) {
    return BGT_IMG_URL.concat(`${token_id}.png?alt=media`);
}