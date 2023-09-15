import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';


const alvyChain = {
  id: 3797,
  name: "Alvey Chain",
  network: "alveychain",
  nativeCurrency: {
    name: "Alvey",
    symbol: "ALV",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: [ "https://rpc2.alvey.io/rpc" ]
    }
  },
  blockExplorers: {
    default: {
      name: "Alvey Explorer",
      url: "https://alveyscanold.com/"
    }
  },
  contracts: {
  /*
    multicall2: {
      address: "0x48d7ac38530697aDB91061B6D141C8c763edE565",
      blockCreated: 10352161
    },
    */
    /*
    multicall3: {
      address: "0xfdd7067530db45CFF766Fe2C26e3590C3B320C4c",
      blockCreated: 10353047
    }
    */
  }
}

export const { chains, publicClient, webSocketPublicClient } = configureChains(
// @ts-ignore
  [/*goerli, mainnet ,*/ alvyChain /*, gnosis, polygon, arbitrum, optimism, sepolia*/],
  [
    /*
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_RPC_KEY || '' }),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY || '' }),*/
    publicProvider(),
  ],
);
