import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuctionDeployer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const auctionDeployerABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'auctionLogicV1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'auctionLogicV2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'auctionProxyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxyAdmin',
    outputs: [
      { name: '', internalType: 'contract ProxyAdmin', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxyAdminAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'upgradeToV2',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BoardGameNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const boardGameNftABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Upgrade
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UpgradeABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3ABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyABI = [
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProxyAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAdminABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract TransparentUpgradeableProxy',
        type: 'address',
      },
      { name: 'newAdmin', internalType: 'address', type: 'address' },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract TransparentUpgradeableProxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract TransparentUpgradeableProxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract TransparentUpgradeableProxy',
        type: 'address',
      },
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgrade',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract TransparentUpgradeableProxy',
        type: 'address',
      },
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenizedVickeryAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenizedVickeryAuctionABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'winningBid',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'AuctionEnded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'commitment',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'calculatedCommitment',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'bidValue',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'auctionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BidDetails',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'auctions',
    outputs: [
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfBiddingPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'numBids', internalType: 'uint64', type: 'uint64' },
      { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'highestBidder', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
      { name: 'nftType', internalType: 'address', type: 'address' },
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bids',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
      { name: 'isRevealed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'erc20Tokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'bidPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'revealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'createAuction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'endAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllAuctions',
    outputs: [
      {
        name: '',
        internalType: 'struct TokenizedVickeryAuction.Auction[]',
        type: 'tuple[]',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAuction',
    outputs: [
      {
        name: 'auction',
        internalType: 'struct TokenizedVickeryAuction.Auction',
        type: 'tuple',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
      { name: 'bidder', internalType: 'address', type: 'address' },
    ],
    name: 'getBid',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
      { name: 'isRevealed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getEndedAuctions',
    outputs: [
      {
        name: '',
        internalType: 'struct TokenizedVickeryAuction.Auction[]',
        type: 'tuple[]',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'bidValue', internalType: 'uint96', type: 'uint96' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'withdrawCollateral',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenizedVickeryAuctionV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenizedVickeryAuctionV2ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'winningBid',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'AuctionEnded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'commitment',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'calculatedCommitment',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'bidValue',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'auctionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BidDetails',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SellerBlacklisted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SellerRemovedFromBlacklist',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'auctions',
    outputs: [
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfBiddingPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'numBids', internalType: 'uint64', type: 'uint64' },
      { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'highestBidder', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
      { name: 'nftType', internalType: 'address', type: 'address' },
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bids',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'seller', internalType: 'address', type: 'address' }],
    name: 'blacklistSeller',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'blacklistedSellers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'erc20Tokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'bidPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'revealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'createAuction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'endAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllAuctions',
    outputs: [
      {
        name: '',
        internalType: 'struct TokenizedVickeryAuction.Auction[]',
        type: 'tuple[]',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAuction',
    outputs: [
      {
        name: 'auction',
        internalType: 'struct TokenizedVickeryAuction.Auction',
        type: 'tuple',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
      { name: 'bidder', internalType: 'address', type: 'address' },
    ],
    name: 'getBid',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getEndedAuctions',
    outputs: [
      {
        name: '',
        internalType: 'struct TokenizedVickeryAuction.Auction[]',
        type: 'tuple[]',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
          { name: 'nftType', internalType: 'address', type: 'address' },
          { name: 'nftId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'seller', internalType: 'address', type: 'address' }],
    name: 'removeSellerFromBlacklist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'bidValue', internalType: 'uint96', type: 'uint96' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'withdrawCollateral',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpgradeableProxyABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: 'admin_', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VickreyAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vickreyAuctionABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'assetId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AssetTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'auctions',
    outputs: [
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfBiddingPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
      { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'highestBidder', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bids',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
    ],
    name: 'commitBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'bidPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'revealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'createAuction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'endAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAuction',
    outputs: [
      {
        name: 'auction',
        internalType: 'struct VickreyAuction.Auction',
        type: 'tuple',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'bidder', internalType: 'address', type: 'address' },
    ],
    name: 'getBid',
    outputs: [
      { name: '', internalType: 'bytes20', type: 'bytes20' },
      { name: '', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'bidValue', internalType: 'uint96', type: 'uint96' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'withdrawCollateral',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wagmipet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wagmipetABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caretaker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'CaretakerLoved',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'clean',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'feed',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAlive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBoredom',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getHunger',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSleepiness',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getStatus',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getUncleanliness',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'love',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'play',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'sleep',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__.
 */
export function useAuctionDeployerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"auctionLogicV1"`.
 */
export function useAuctionDeployerAuctionLogicV1<
  TFunctionName extends 'auctionLogicV1',
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    functionName: 'auctionLogicV1',
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"auctionLogicV2"`.
 */
export function useAuctionDeployerAuctionLogicV2<
  TFunctionName extends 'auctionLogicV2',
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    functionName: 'auctionLogicV2',
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"auctionProxyAddress"`.
 */
export function useAuctionDeployerAuctionProxyAddress<
  TFunctionName extends 'auctionProxyAddress',
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    functionName: 'auctionProxyAddress',
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"proxyAdmin"`.
 */
export function useAuctionDeployerProxyAdmin<
  TFunctionName extends 'proxyAdmin',
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    functionName: 'proxyAdmin',
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"proxyAdminAddress"`.
 */
export function useAuctionDeployerProxyAdminAddress<
  TFunctionName extends 'proxyAdminAddress',
  TSelectData = ReadContractResult<typeof auctionDeployerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof auctionDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: auctionDeployerABI,
    functionName: 'proxyAdminAddress',
    ...config,
  } as UseContractReadConfig<
    typeof auctionDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link auctionDeployerABI}__.
 */
export function useAuctionDeployerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof auctionDeployerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof auctionDeployerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof auctionDeployerABI, TFunctionName, TMode>({
    abi: auctionDeployerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"upgradeToV2"`.
 */
export function useAuctionDeployerUpgradeToV2<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof auctionDeployerABI,
          'upgradeToV2'
        >['request']['abi'],
        'upgradeToV2',
        TMode
      > & { functionName?: 'upgradeToV2' }
    : UseContractWriteConfig<
        typeof auctionDeployerABI,
        'upgradeToV2',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToV2'
      } = {} as any,
) {
  return useContractWrite<typeof auctionDeployerABI, 'upgradeToV2', TMode>({
    abi: auctionDeployerABI,
    functionName: 'upgradeToV2',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link auctionDeployerABI}__.
 */
export function usePrepareAuctionDeployerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof auctionDeployerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: auctionDeployerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof auctionDeployerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link auctionDeployerABI}__ and `functionName` set to `"upgradeToV2"`.
 */
export function usePrepareAuctionDeployerUpgradeToV2(
  config: Omit<
    UsePrepareContractWriteConfig<typeof auctionDeployerABI, 'upgradeToV2'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: auctionDeployerABI,
    functionName: 'upgradeToV2',
    ...config,
  } as UsePrepareContractWriteConfig<typeof auctionDeployerABI, 'upgradeToV2'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__.
 */
export function useBoardGameNftRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useBoardGameNftBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"getApproved"`.
 */
export function useBoardGameNftGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useBoardGameNftIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"name"`.
 */
export function useBoardGameNftName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useBoardGameNftOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useBoardGameNftSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"symbol"`.
 */
export function useBoardGameNftSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useBoardGameNftTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"tokensOfOwner"`.
 */
export function useBoardGameNftTokensOfOwner<
  TFunctionName extends 'tokensOfOwner',
  TSelectData = ReadContractResult<typeof boardGameNftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof boardGameNftABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: boardGameNftABI,
    functionName: 'tokensOfOwner',
    ...config,
  } as UseContractReadConfig<
    typeof boardGameNftABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__.
 */
export function useBoardGameNftWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof boardGameNftABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, TFunctionName, TMode>({
    abi: boardGameNftABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"approve"`.
 */
export function useBoardGameNftApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof boardGameNftABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, 'approve', TMode>({
    abi: boardGameNftABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"mint"`.
 */
export function useBoardGameNftMint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof boardGameNftABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, 'mint', TMode>({
    abi: boardGameNftABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useBoardGameNftSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof boardGameNftABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, 'safeTransferFrom', TMode>({
    abi: boardGameNftABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useBoardGameNftSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof boardGameNftABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, 'setApprovalForAll', TMode>({
    abi: boardGameNftABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useBoardGameNftTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof boardGameNftABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof boardGameNftABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof boardGameNftABI, 'transferFrom', TMode>({
    abi: boardGameNftABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__.
 */
export function usePrepareBoardGameNftWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof boardGameNftABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareBoardGameNftApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof boardGameNftABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareBoardGameNftMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof boardGameNftABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareBoardGameNftSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof boardGameNftABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareBoardGameNftSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof boardGameNftABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link boardGameNftABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareBoardGameNftTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof boardGameNftABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: boardGameNftABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof boardGameNftABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link boardGameNftABI}__.
 */
export function useBoardGameNftEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof boardGameNftABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: boardGameNftABI,
    ...config,
  } as UseContractEventConfig<typeof boardGameNftABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link boardGameNftABI}__ and `eventName` set to `"Approval"`.
 */
export function useBoardGameNftApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof boardGameNftABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: boardGameNftABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof boardGameNftABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link boardGameNftABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useBoardGameNftApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof boardGameNftABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: boardGameNftABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof boardGameNftABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link boardGameNftABI}__ and `eventName` set to `"Transfer"`.
 */
export function useBoardGameNftTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof boardGameNftABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: boardGameNftABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof boardGameNftABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc165ABI, ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__.
 */
export function useErc1967ProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useErc1967ProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, 'AdminChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useErc1967ProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, 'BeaconUpgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useErc1967ProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeABI}__.
 */
export function useErc1967UpgradeEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc1967UpgradeABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UpgradeABI,
    ...config,
  } as UseContractEventConfig<typeof erc1967UpgradeABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useErc1967UpgradeAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UpgradeABI, 'AdminChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UpgradeABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof erc1967UpgradeABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useErc1967UpgradeBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UpgradeABI, 'BeaconUpgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UpgradeABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967UpgradeABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useErc1967UpgradeUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UpgradeABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UpgradeABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967UpgradeABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'decreaseAllowance', TMode> & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'decreaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'increaseAllowance', TMode> & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'increaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iBeaconABI}__.
 */
export function useIBeaconRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iBeaconABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iBeaconABI,
    ...config,
  } as UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iBeaconABI}__ and `functionName` set to `"implementation"`.
 */
export function useIBeaconImplementation<
  TFunctionName extends 'implementation',
  TSelectData = ReadContractResult<typeof iBeaconABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iBeaconABI,
    functionName: 'implementation',
    ...config,
  } as UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1822ProxiableABI}__.
 */
export function useIerc1822ProxiableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc1822ProxiableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc1822ProxiableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1822ProxiableABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc1822ProxiableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1822ProxiableABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useIerc1822ProxiableProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof ierc1822ProxiableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc1822ProxiableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1822ProxiableABI,
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<
    typeof ierc1822ProxiableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: ierc20ABI, ...config } as UseContractReadConfig<
    typeof ierc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, TFunctionName, TMode>({
    abi: ierc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'approve', TMode>({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transfer', TMode>({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transferFrom', TMode>({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function usePrepareIerc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20MetadataAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"decimals"`.
 */
export function useIerc20MetadataDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc20MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc20MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20MetadataTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20MetadataABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, TFunctionName, TMode>({
    abi: ierc20MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'approve', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20MetadataTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transfer', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc20MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transferFrom', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function usePrepareIerc20MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20MetadataTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, TFunctionName, TMode>({
    abi: ierc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'approve', TMode>({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'safeTransferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'setApprovalForAll', TMode>({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'transferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function usePrepareIerc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721MetadataGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721MetadataIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc721MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721MetadataOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721MetadataSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc721MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useIerc721MetadataTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, TFunctionName, TMode>({
    abi: ierc721MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'approve', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721MetadataSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'safeTransferFrom', TMode>(
    {
      abi: ierc721MetadataABI,
      functionName: 'safeTransferFrom',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721MetadataSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721MetadataABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'transferFrom', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function usePrepareIerc721MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721MetadataSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721MetadataSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721MetadataApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function useIerc721ReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, TFunctionName, TMode>({
    abi: ierc721ReceiverABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721ReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, 'onERC721Received', TMode>(
    {
      abi: ierc721ReceiverABI,
      functionName: 'onERC721Received',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function usePrepareIerc721ReceiverWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721ReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721ReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721ReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__.
 */
export function useIerc721TokenReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721TokenReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721TokenReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721TokenReceiverABI, TFunctionName, TMode>(
    { abi: ierc721TokenReceiverABI, ...config } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721TokenReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721TokenReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721TokenReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721TokenReceiverABI,
    'onERC721Received',
    TMode
  >({
    abi: ierc721TokenReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__.
 */
export function usePrepareIerc721TokenReceiverWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721TokenReceiverABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721TokenReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721TokenReceiverABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721TokenReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721TokenReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721TokenReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721TokenReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBasefee"`.
 */
export function useIMulticall3GetBasefee<
  TFunctionName extends 'getBasefee',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBasefee',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockHash"`.
 */
export function useIMulticall3GetBlockHash<
  TFunctionName extends 'getBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockNumber"`.
 */
export function useIMulticall3GetBlockNumber<
  TFunctionName extends 'getBlockNumber',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockNumber',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getChainId"`.
 */
export function useIMulticall3GetChainId<
  TFunctionName extends 'getChainId',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getChainId',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockCoinbase"`.
 */
export function useIMulticall3GetCurrentBlockCoinbase<
  TFunctionName extends 'getCurrentBlockCoinbase',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockCoinbase',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockDifficulty"`.
 */
export function useIMulticall3GetCurrentBlockDifficulty<
  TFunctionName extends 'getCurrentBlockDifficulty',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockDifficulty',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockGasLimit"`.
 */
export function useIMulticall3GetCurrentBlockGasLimit<
  TFunctionName extends 'getCurrentBlockGasLimit',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockGasLimit',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockTimestamp"`.
 */
export function useIMulticall3GetCurrentBlockTimestamp<
  TFunctionName extends 'getCurrentBlockTimestamp',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockTimestamp',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getEthBalance"`.
 */
export function useIMulticall3GetEthBalance<
  TFunctionName extends 'getEthBalance',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getEthBalance',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getLastBlockHash"`.
 */
export function useIMulticall3GetLastBlockHash<
  TFunctionName extends 'getLastBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getLastBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iMulticall3ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, TFunctionName, TMode>({
    abi: iMulticall3ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function useIMulticall3Aggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate'
        >['request']['abi'],
        'aggregate',
        TMode
      > & { functionName?: 'aggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate', TMode> & {
        abi?: never
        functionName?: 'aggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function useIMulticall3Aggregate3<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3'
        >['request']['abi'],
        'aggregate3',
        TMode
      > & { functionName?: 'aggregate3' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate3', TMode> & {
        abi?: never
        functionName?: 'aggregate3'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function useIMulticall3Aggregate3Value<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3Value'
        >['request']['abi'],
        'aggregate3Value',
        TMode
      > & { functionName?: 'aggregate3Value' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'aggregate3Value',
        TMode
      > & {
        abi?: never
        functionName?: 'aggregate3Value'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3Value', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function useIMulticall3BlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'blockAndAggregate'
        >['request']['abi'],
        'blockAndAggregate',
        TMode
      > & { functionName?: 'blockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'blockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'blockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'blockAndAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function useIMulticall3TryAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryAggregate'
        >['request']['abi'],
        'tryAggregate',
        TMode
      > & { functionName?: 'tryAggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate', TMode> & {
        abi?: never
        functionName?: 'tryAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function useIMulticall3TryBlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryBlockAndAggregate'
        >['request']['abi'],
        'tryBlockAndAggregate',
        TMode
      > & { functionName?: 'tryBlockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'tryBlockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'tryBlockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryBlockAndAggregate', TMode>(
    {
      abi: iMulticall3ABI,
      functionName: 'tryBlockAndAggregate',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function usePrepareIMulticall3Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function usePrepareIMulticall3Aggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function usePrepareIMulticall3Aggregate3(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function usePrepareIMulticall3Aggregate3Value(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function usePrepareIMulticall3BlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'blockAndAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'blockAndAggregate'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function usePrepareIMulticall3TryAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function usePrepareIMulticall3TryBlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iMulticall3ABI,
      'tryBlockAndAggregate'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryBlockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'tryBlockAndAggregate'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useMockErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useMockErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMockErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, TFunctionName, TMode>({
    abi: mockErc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc20Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'approve', TMode>({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useMockErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<
        typeof mockErc20ABI,
        'decreaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'decreaseAllowance', TMode>({
    abi: mockErc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useMockErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<
        typeof mockErc20ABI,
        'increaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'increaseAllowance', TMode>({
    abi: mockErc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useMockErc20Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'mint', TMode>({
    abi: mockErc20ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useMockErc20Transfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transfer', TMode>({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transferFrom', TMode>({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function usePrepareMockErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareMockErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareMockErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareMockErc20Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareMockErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useMockErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useMockErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useMockErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useMockErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useMockErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"tokensOfOwner"`.
 */
export function useMockErc721TokensOfOwner<
  TFunctionName extends 'tokensOfOwner',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'tokensOfOwner',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, TFunctionName, TMode>({
    abi: mockErc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc721Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'approve', TMode>({
    abi: mockErc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function useMockErc721Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'mint', TMode>({
    abi: mockErc721ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useMockErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof mockErc721ABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'safeTransferFrom', TMode>({
    abi: mockErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useMockErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof mockErc721ABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'setApprovalForAll', TMode>({
    abi: mockErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'transferFrom', TMode>({
    abi: mockErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function usePrepareMockErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareMockErc721Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareMockErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareMockErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useMockErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnableOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownableABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, TFunctionName, TMode>({
    abi: ownableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'renounceOwnership', TMode>({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'transferOwnership', TMode>({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    ...config,
  } as UseContractEventConfig<typeof ownableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"getProxyAdmin"`.
 */
export function useProxyAdminGetProxyAdmin<
  TFunctionName extends 'getProxyAdmin',
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    functionName: 'getProxyAdmin',
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"getProxyImplementation"`.
 */
export function useProxyAdminGetProxyImplementation<
  TFunctionName extends 'getProxyImplementation',
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    functionName: 'getProxyImplementation',
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"owner"`.
 */
export function useProxyAdminOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof proxyAdminABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, TFunctionName, TMode>({
    abi: proxyAdminABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"changeProxyAdmin"`.
 */
export function useProxyAdminChangeProxyAdmin<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'changeProxyAdmin'
        >['request']['abi'],
        'changeProxyAdmin',
        TMode
      > & { functionName?: 'changeProxyAdmin' }
    : UseContractWriteConfig<
        typeof proxyAdminABI,
        'changeProxyAdmin',
        TMode
      > & {
        abi?: never
        functionName?: 'changeProxyAdmin'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'changeProxyAdmin', TMode>({
    abi: proxyAdminABI,
    functionName: 'changeProxyAdmin',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useProxyAdminRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof proxyAdminABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'renounceOwnership', TMode>({
    abi: proxyAdminABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useProxyAdminTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof proxyAdminABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'transferOwnership', TMode>({
    abi: proxyAdminABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgrade"`.
 */
export function useProxyAdminUpgrade<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'upgrade'
        >['request']['abi'],
        'upgrade',
        TMode
      > & { functionName?: 'upgrade' }
    : UseContractWriteConfig<typeof proxyAdminABI, 'upgrade', TMode> & {
        abi?: never
        functionName?: 'upgrade'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'upgrade', TMode>({
    abi: proxyAdminABI,
    functionName: 'upgrade',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgradeAndCall"`.
 */
export function useProxyAdminUpgradeAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'upgradeAndCall'
        >['request']['abi'],
        'upgradeAndCall',
        TMode
      > & { functionName?: 'upgradeAndCall' }
    : UseContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall', TMode> & {
        abi?: never
        functionName?: 'upgradeAndCall'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'upgradeAndCall', TMode>({
    abi: proxyAdminABI,
    functionName: 'upgradeAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function usePrepareProxyAdminWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"changeProxyAdmin"`.
 */
export function usePrepareProxyAdminChangeProxyAdmin(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'changeProxyAdmin'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'changeProxyAdmin',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'changeProxyAdmin'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareProxyAdminRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareProxyAdminTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgrade"`.
 */
export function usePrepareProxyAdminUpgrade(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgrade'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'upgrade',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgrade'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgradeAndCall"`.
 */
export function usePrepareProxyAdminUpgradeAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'upgradeAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof proxyAdminABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: proxyAdminABI,
    ...config,
  } as UseContractEventConfig<typeof proxyAdminABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link proxyAdminABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useProxyAdminOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof proxyAdminABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: proxyAdminABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof proxyAdminABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"auctions"`.
 */
export function useTokenizedVickeryAuctionAuctions<
  TFunctionName extends 'auctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'auctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"bids"`.
 */
export function useTokenizedVickeryAuctionBids<
  TFunctionName extends 'bids',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'bids',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"getAllAuctions"`.
 */
export function useTokenizedVickeryAuctionGetAllAuctions<
  TFunctionName extends 'getAllAuctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'getAllAuctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"getAuction"`.
 */
export function useTokenizedVickeryAuctionGetAuction<
  TFunctionName extends 'getAuction',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'getAuction',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"getBid"`.
 */
export function useTokenizedVickeryAuctionGetBid<
  TFunctionName extends 'getBid',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'getBid',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"getEndedAuctions"`.
 */
export function useTokenizedVickeryAuctionGetEndedAuctions<
  TFunctionName extends 'getEndedAuctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'getEndedAuctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TMode
  >({ abi: tokenizedVickeryAuctionABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function useTokenizedVickeryAuctionCommitBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'commitBid'
        >['request']['abi'],
        'commitBid',
        TMode
      > & { functionName?: 'commitBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'commitBid',
        TMode
      > & {
        abi?: never
        functionName?: 'commitBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'commitBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function useTokenizedVickeryAuctionCreateAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'createAuction'
        >['request']['abi'],
        'createAuction',
        TMode
      > & { functionName?: 'createAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'createAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'createAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'createAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function useTokenizedVickeryAuctionEndAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'endAuction'
        >['request']['abi'],
        'endAuction',
        TMode
      > & { functionName?: 'endAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'endAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'endAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'endAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"initialize"`.
 */
export function useTokenizedVickeryAuctionInitialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'initialize',
        TMode
      > & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'initialize',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function useTokenizedVickeryAuctionRevealBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'revealBid'
        >['request']['abi'],
        'revealBid',
        TMode
      > & { functionName?: 'revealBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'revealBid',
        TMode
      > & {
        abi?: never
        functionName?: 'revealBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'revealBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function useTokenizedVickeryAuctionWithdrawCollateral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'withdrawCollateral'
        >['request']['abi'],
        'withdrawCollateral',
        TMode
      > & { functionName?: 'withdrawCollateral' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'withdrawCollateral',
        TMode
      > & {
        abi?: never
        functionName?: 'withdrawCollateral'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'withdrawCollateral',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function usePrepareTokenizedVickeryAuctionWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function usePrepareTokenizedVickeryAuctionCommitBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'commitBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'commitBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionCreateAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'createAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'createAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionEndAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'endAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'endAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareTokenizedVickeryAuctionInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'initialize'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'initialize'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function usePrepareTokenizedVickeryAuctionRevealBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'revealBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'revealBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function usePrepareTokenizedVickeryAuctionWithdrawCollateral(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'withdrawCollateral'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'withdrawCollateral'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `eventName` set to `"AuctionEnded"`.
 */
export function useTokenizedVickeryAuctionAuctionEndedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'AuctionEnded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    eventName: 'AuctionEnded',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionABI,
    'AuctionEnded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `eventName` set to `"BidDetails"`.
 */
export function useTokenizedVickeryAuctionBidDetailsEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'BidDetails'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    eventName: 'BidDetails',
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'BidDetails'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"auctions"`.
 */
export function useTokenizedVickeryAuctionV2Auctions<
  TFunctionName extends 'auctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'auctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"bids"`.
 */
export function useTokenizedVickeryAuctionV2Bids<
  TFunctionName extends 'bids',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'bids',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"blacklistedSellers"`.
 */
export function useTokenizedVickeryAuctionV2BlacklistedSellers<
  TFunctionName extends 'blacklistedSellers',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'blacklistedSellers',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getAllAuctions"`.
 */
export function useTokenizedVickeryAuctionV2GetAllAuctions<
  TFunctionName extends 'getAllAuctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getAllAuctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getAuction"`.
 */
export function useTokenizedVickeryAuctionV2GetAuction<
  TFunctionName extends 'getAuction',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getAuction',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getBid"`.
 */
export function useTokenizedVickeryAuctionV2GetBid<
  TFunctionName extends 'getBid',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getBid',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getEndedAuctions"`.
 */
export function useTokenizedVickeryAuctionV2GetEndedAuctions<
  TFunctionName extends 'getEndedAuctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getEndedAuctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TMode
  >({ abi: tokenizedVickeryAuctionV2ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"blacklistSeller"`.
 */
export function useTokenizedVickeryAuctionV2BlacklistSeller<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'blacklistSeller'
        >['request']['abi'],
        'blacklistSeller',
        TMode
      > & { functionName?: 'blacklistSeller' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'blacklistSeller',
        TMode
      > & {
        abi?: never
        functionName?: 'blacklistSeller'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'blacklistSeller',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'blacklistSeller',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"commitBid"`.
 */
export function useTokenizedVickeryAuctionV2CommitBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'commitBid'
        >['request']['abi'],
        'commitBid',
        TMode
      > & { functionName?: 'commitBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'commitBid',
        TMode
      > & {
        abi?: never
        functionName?: 'commitBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'commitBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'commitBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"createAuction"`.
 */
export function useTokenizedVickeryAuctionV2CreateAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'createAuction'
        >['request']['abi'],
        'createAuction',
        TMode
      > & { functionName?: 'createAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'createAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'createAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'createAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'createAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"endAuction"`.
 */
export function useTokenizedVickeryAuctionV2EndAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'endAuction'
        >['request']['abi'],
        'endAuction',
        TMode
      > & { functionName?: 'endAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'endAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'endAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'endAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'endAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"initialize"`.
 */
export function useTokenizedVickeryAuctionV2Initialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'initialize',
        TMode
      > & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'initialize',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"removeSellerFromBlacklist"`.
 */
export function useTokenizedVickeryAuctionV2RemoveSellerFromBlacklist<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'removeSellerFromBlacklist'
        >['request']['abi'],
        'removeSellerFromBlacklist',
        TMode
      > & { functionName?: 'removeSellerFromBlacklist' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'removeSellerFromBlacklist',
        TMode
      > & {
        abi?: never
        functionName?: 'removeSellerFromBlacklist'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'removeSellerFromBlacklist',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'removeSellerFromBlacklist',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"revealBid"`.
 */
export function useTokenizedVickeryAuctionV2RevealBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'revealBid'
        >['request']['abi'],
        'revealBid',
        TMode
      > & { functionName?: 'revealBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'revealBid',
        TMode
      > & {
        abi?: never
        functionName?: 'revealBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'revealBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'revealBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function useTokenizedVickeryAuctionV2WithdrawCollateral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'withdrawCollateral'
        >['request']['abi'],
        'withdrawCollateral',
        TMode
      > & { functionName?: 'withdrawCollateral' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'withdrawCollateral',
        TMode
      > & {
        abi?: never
        functionName?: 'withdrawCollateral'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'withdrawCollateral',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function usePrepareTokenizedVickeryAuctionV2Write<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"blacklistSeller"`.
 */
export function usePrepareTokenizedVickeryAuctionV2BlacklistSeller(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'blacklistSeller'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'blacklistSeller',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'blacklistSeller'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"commitBid"`.
 */
export function usePrepareTokenizedVickeryAuctionV2CommitBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'commitBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'commitBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'commitBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"createAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionV2CreateAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'createAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'createAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'createAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"endAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionV2EndAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'endAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'endAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'endAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareTokenizedVickeryAuctionV2Initialize(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'initialize'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'initialize'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"removeSellerFromBlacklist"`.
 */
export function usePrepareTokenizedVickeryAuctionV2RemoveSellerFromBlacklist(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'removeSellerFromBlacklist'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'removeSellerFromBlacklist',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'removeSellerFromBlacklist'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"revealBid"`.
 */
export function usePrepareTokenizedVickeryAuctionV2RevealBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'revealBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'revealBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'revealBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function usePrepareTokenizedVickeryAuctionV2WithdrawCollateral(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'withdrawCollateral'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'withdrawCollateral'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"AuctionEnded"`.
 */
export function useTokenizedVickeryAuctionV2AuctionEndedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, 'AuctionEnded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'AuctionEnded',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'AuctionEnded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"BidDetails"`.
 */
export function useTokenizedVickeryAuctionV2BidDetailsEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, 'BidDetails'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'BidDetails',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'BidDetails'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"SellerBlacklisted"`.
 */
export function useTokenizedVickeryAuctionV2SellerBlacklistedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'SellerBlacklisted'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'SellerBlacklisted',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'SellerBlacklisted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"SellerRemovedFromBlacklist"`.
 */
export function useTokenizedVickeryAuctionV2SellerRemovedFromBlacklistEvent(
  config: Omit<
    UseContractEventConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'SellerRemovedFromBlacklist'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'SellerRemovedFromBlacklist',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'SellerRemovedFromBlacklist'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__.
 */
export function useTransparentUpgradeableProxyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    TFunctionName,
    TMode
  >({ abi: transparentUpgradeableProxyABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"admin"`.
 */
export function useTransparentUpgradeableProxyAdmin<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          'admin'
        >['request']['abi'],
        'admin',
        TMode
      > & { functionName?: 'admin' }
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        'admin',
        TMode
      > & {
        abi?: never
        functionName?: 'admin'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    'admin',
    TMode
  >({
    abi: transparentUpgradeableProxyABI,
    functionName: 'admin',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"changeAdmin"`.
 */
export function useTransparentUpgradeableProxyChangeAdmin<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          'changeAdmin'
        >['request']['abi'],
        'changeAdmin',
        TMode
      > & { functionName?: 'changeAdmin' }
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        'changeAdmin',
        TMode
      > & {
        abi?: never
        functionName?: 'changeAdmin'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    'changeAdmin',
    TMode
  >({
    abi: transparentUpgradeableProxyABI,
    functionName: 'changeAdmin',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"implementation"`.
 */
export function useTransparentUpgradeableProxyImplementation<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          'implementation'
        >['request']['abi'],
        'implementation',
        TMode
      > & { functionName?: 'implementation' }
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        'implementation',
        TMode
      > & {
        abi?: never
        functionName?: 'implementation'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    'implementation',
    TMode
  >({
    abi: transparentUpgradeableProxyABI,
    functionName: 'implementation',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function useTransparentUpgradeableProxyUpgradeTo<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          'upgradeTo'
        >['request']['abi'],
        'upgradeTo',
        TMode
      > & { functionName?: 'upgradeTo' }
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        'upgradeTo',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeTo'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    'upgradeTo',
    TMode
  >({
    abi: transparentUpgradeableProxyABI,
    functionName: 'upgradeTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useTransparentUpgradeableProxyUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpgradeableProxyABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof transparentUpgradeableProxyABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpgradeableProxyABI,
    'upgradeToAndCall',
    TMode
  >({
    abi: transparentUpgradeableProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__.
 */
export function usePrepareTransparentUpgradeableProxyWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"admin"`.
 */
export function usePrepareTransparentUpgradeableProxyAdmin(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      'admin'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    functionName: 'admin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    'admin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"changeAdmin"`.
 */
export function usePrepareTransparentUpgradeableProxyChangeAdmin(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      'changeAdmin'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    functionName: 'changeAdmin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    'changeAdmin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"implementation"`.
 */
export function usePrepareTransparentUpgradeableProxyImplementation(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      'implementation'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    functionName: 'implementation',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    'implementation'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function usePrepareTransparentUpgradeableProxyUpgradeTo(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      'upgradeTo'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    functionName: 'upgradeTo',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    'upgradeTo'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareTransparentUpgradeableProxyUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpgradeableProxyABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpgradeableProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpgradeableProxyABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__.
 */
export function useTransparentUpgradeableProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof transparentUpgradeableProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useTransparentUpgradeableProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof transparentUpgradeableProxyABI,
      'AdminChanged'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    'AdminChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useTransparentUpgradeableProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof transparentUpgradeableProxyABI,
      'BeaconUpgraded'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    'BeaconUpgraded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTransparentUpgradeableProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof transparentUpgradeableProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    'Upgraded'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vickreyAuctionABI}__.
 */
export function useVickreyAuctionRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof vickreyAuctionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vickreyAuctionABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: vickreyAuctionABI,
    ...config,
  } as UseContractReadConfig<
    typeof vickreyAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"auctions"`.
 */
export function useVickreyAuctionAuctions<
  TFunctionName extends 'auctions',
  TSelectData = ReadContractResult<typeof vickreyAuctionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vickreyAuctionABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vickreyAuctionABI,
    functionName: 'auctions',
    ...config,
  } as UseContractReadConfig<
    typeof vickreyAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"bids"`.
 */
export function useVickreyAuctionBids<
  TFunctionName extends 'bids',
  TSelectData = ReadContractResult<typeof vickreyAuctionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vickreyAuctionABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vickreyAuctionABI,
    functionName: 'bids',
    ...config,
  } as UseContractReadConfig<
    typeof vickreyAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"getAuction"`.
 */
export function useVickreyAuctionGetAuction<
  TFunctionName extends 'getAuction',
  TSelectData = ReadContractResult<typeof vickreyAuctionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vickreyAuctionABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vickreyAuctionABI,
    functionName: 'getAuction',
    ...config,
  } as UseContractReadConfig<
    typeof vickreyAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"getBid"`.
 */
export function useVickreyAuctionGetBid<
  TFunctionName extends 'getBid',
  TSelectData = ReadContractResult<typeof vickreyAuctionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vickreyAuctionABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vickreyAuctionABI,
    functionName: 'getBid',
    ...config,
  } as UseContractReadConfig<
    typeof vickreyAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__.
 */
export function useVickreyAuctionWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof vickreyAuctionABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof vickreyAuctionABI, TFunctionName, TMode>({
    abi: vickreyAuctionABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function useVickreyAuctionCommitBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          'commitBid'
        >['request']['abi'],
        'commitBid',
        TMode
      > & { functionName?: 'commitBid' }
    : UseContractWriteConfig<typeof vickreyAuctionABI, 'commitBid', TMode> & {
        abi?: never
        functionName?: 'commitBid'
      } = {} as any,
) {
  return useContractWrite<typeof vickreyAuctionABI, 'commitBid', TMode>({
    abi: vickreyAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function useVickreyAuctionCreateAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          'createAuction'
        >['request']['abi'],
        'createAuction',
        TMode
      > & { functionName?: 'createAuction' }
    : UseContractWriteConfig<
        typeof vickreyAuctionABI,
        'createAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'createAuction'
      } = {} as any,
) {
  return useContractWrite<typeof vickreyAuctionABI, 'createAuction', TMode>({
    abi: vickreyAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function useVickreyAuctionEndAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          'endAuction'
        >['request']['abi'],
        'endAuction',
        TMode
      > & { functionName?: 'endAuction' }
    : UseContractWriteConfig<typeof vickreyAuctionABI, 'endAuction', TMode> & {
        abi?: never
        functionName?: 'endAuction'
      } = {} as any,
) {
  return useContractWrite<typeof vickreyAuctionABI, 'endAuction', TMode>({
    abi: vickreyAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function useVickreyAuctionRevealBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          'revealBid'
        >['request']['abi'],
        'revealBid',
        TMode
      > & { functionName?: 'revealBid' }
    : UseContractWriteConfig<typeof vickreyAuctionABI, 'revealBid', TMode> & {
        abi?: never
        functionName?: 'revealBid'
      } = {} as any,
) {
  return useContractWrite<typeof vickreyAuctionABI, 'revealBid', TMode>({
    abi: vickreyAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function useVickreyAuctionWithdrawCollateral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vickreyAuctionABI,
          'withdrawCollateral'
        >['request']['abi'],
        'withdrawCollateral',
        TMode
      > & { functionName?: 'withdrawCollateral' }
    : UseContractWriteConfig<
        typeof vickreyAuctionABI,
        'withdrawCollateral',
        TMode
      > & {
        abi?: never
        functionName?: 'withdrawCollateral'
      } = {} as any,
) {
  return useContractWrite<
    typeof vickreyAuctionABI,
    'withdrawCollateral',
    TMode
  >({
    abi: vickreyAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__.
 */
export function usePrepareVickreyAuctionWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vickreyAuctionABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof vickreyAuctionABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function usePrepareVickreyAuctionCommitBid(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'commitBid'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'commitBid'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function usePrepareVickreyAuctionCreateAuction(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'createAuction'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'createAuction'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function usePrepareVickreyAuctionEndAuction(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'endAuction'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'endAuction'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function usePrepareVickreyAuctionRevealBid(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'revealBid'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vickreyAuctionABI, 'revealBid'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vickreyAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function usePrepareVickreyAuctionWithdrawCollateral(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof vickreyAuctionABI,
      'withdrawCollateral'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vickreyAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof vickreyAuctionABI,
    'withdrawCollateral'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link vickreyAuctionABI}__.
 */
export function useVickreyAuctionEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof vickreyAuctionABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: vickreyAuctionABI,
    ...config,
  } as UseContractEventConfig<typeof vickreyAuctionABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link vickreyAuctionABI}__ and `eventName` set to `"AssetTransferred"`.
 */
export function useVickreyAuctionAssetTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof vickreyAuctionABI, 'AssetTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: vickreyAuctionABI,
    eventName: 'AssetTransferred',
    ...config,
  } as UseContractEventConfig<typeof vickreyAuctionABI, 'AssetTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__.
 */
export function useWagmipetRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getAlive"`.
 */
export function useWagmipetGetAlive<
  TFunctionName extends 'getAlive',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getAlive',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getBoredom"`.
 */
export function useWagmipetGetBoredom<
  TFunctionName extends 'getBoredom',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getBoredom',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getHunger"`.
 */
export function useWagmipetGetHunger<
  TFunctionName extends 'getHunger',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getHunger',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getSleepiness"`.
 */
export function useWagmipetGetSleepiness<
  TFunctionName extends 'getSleepiness',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getSleepiness',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getStatus"`.
 */
export function useWagmipetGetStatus<
  TFunctionName extends 'getStatus',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getStatus',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"getUncleanliness"`.
 */
export function useWagmipetGetUncleanliness<
  TFunctionName extends 'getUncleanliness',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'getUncleanliness',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"love"`.
 */
export function useWagmipetLove<
  TFunctionName extends 'love',
  TSelectData = ReadContractResult<typeof wagmipetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: wagmipetABI,
    functionName: 'love',
    ...config,
  } as UseContractReadConfig<typeof wagmipetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmipetABI}__.
 */
export function useWagmipetWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmipetABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof wagmipetABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof wagmipetABI, TFunctionName, TMode>({
    abi: wagmipetABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"clean"`.
 */
export function useWagmipetClean<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmipetABI,
          'clean'
        >['request']['abi'],
        'clean',
        TMode
      > & { functionName?: 'clean' }
    : UseContractWriteConfig<typeof wagmipetABI, 'clean', TMode> & {
        abi?: never
        functionName?: 'clean'
      } = {} as any,
) {
  return useContractWrite<typeof wagmipetABI, 'clean', TMode>({
    abi: wagmipetABI,
    functionName: 'clean',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"feed"`.
 */
export function useWagmipetFeed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmipetABI,
          'feed'
        >['request']['abi'],
        'feed',
        TMode
      > & { functionName?: 'feed' }
    : UseContractWriteConfig<typeof wagmipetABI, 'feed', TMode> & {
        abi?: never
        functionName?: 'feed'
      } = {} as any,
) {
  return useContractWrite<typeof wagmipetABI, 'feed', TMode>({
    abi: wagmipetABI,
    functionName: 'feed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"play"`.
 */
export function useWagmipetPlay<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmipetABI,
          'play'
        >['request']['abi'],
        'play',
        TMode
      > & { functionName?: 'play' }
    : UseContractWriteConfig<typeof wagmipetABI, 'play', TMode> & {
        abi?: never
        functionName?: 'play'
      } = {} as any,
) {
  return useContractWrite<typeof wagmipetABI, 'play', TMode>({
    abi: wagmipetABI,
    functionName: 'play',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"sleep"`.
 */
export function useWagmipetSleep<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmipetABI,
          'sleep'
        >['request']['abi'],
        'sleep',
        TMode
      > & { functionName?: 'sleep' }
    : UseContractWriteConfig<typeof wagmipetABI, 'sleep', TMode> & {
        abi?: never
        functionName?: 'sleep'
      } = {} as any,
) {
  return useContractWrite<typeof wagmipetABI, 'sleep', TMode>({
    abi: wagmipetABI,
    functionName: 'sleep',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmipetABI}__.
 */
export function usePrepareWagmipetWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmipetABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmipetABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmipetABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"clean"`.
 */
export function usePrepareWagmipetClean(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmipetABI, 'clean'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmipetABI,
    functionName: 'clean',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmipetABI, 'clean'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"feed"`.
 */
export function usePrepareWagmipetFeed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmipetABI, 'feed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmipetABI,
    functionName: 'feed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmipetABI, 'feed'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"play"`.
 */
export function usePrepareWagmipetPlay(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmipetABI, 'play'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmipetABI,
    functionName: 'play',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmipetABI, 'play'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmipetABI}__ and `functionName` set to `"sleep"`.
 */
export function usePrepareWagmipetSleep(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmipetABI, 'sleep'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmipetABI,
    functionName: 'sleep',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmipetABI, 'sleep'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmipetABI}__.
 */
export function useWagmipetEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof wagmipetABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: wagmipetABI,
    ...config,
  } as UseContractEventConfig<typeof wagmipetABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmipetABI}__ and `eventName` set to `"CaretakerLoved"`.
 */
export function useWagmipetCaretakerLovedEvent(
  config: Omit<
    UseContractEventConfig<typeof wagmipetABI, 'CaretakerLoved'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: wagmipetABI,
    eventName: 'CaretakerLoved',
    ...config,
  } as UseContractEventConfig<typeof wagmipetABI, 'CaretakerLoved'>)
}
