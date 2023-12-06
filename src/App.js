import React from 'react';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import { WagmiConfig, createConfig, configureChains, mainnet, sepolia } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Home from './pages/home';
import MintNFT from './pages/mintNFT';
import MintToken from './pages/mintToken';
import CreateAuction from './pages/createAuction';
import Assets from './pages/assets';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import './App.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: 'Ar08CeP55EpgbRw1Osj_41IpKQr-PO_J' }), publicProvider()],
)

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains })
  ],
  publicClient,
  webSocketPublicClient
})

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mint-nft" element={<MintNFT />}></Route>
            <Route path="/mint-erc20" element={<MintToken />}></Route>
            <Route path="/view-assets" element={<Assets />}></Route>
            <Route path="/auction/create" element={<CreateAuction />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </WagmiConfig>
  );
}

export default App;
