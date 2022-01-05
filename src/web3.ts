import Web3Modal, { IProviderOptions } from "web3modal";
import { store } from "./store";

export class web3Interface {
  provider: any;

  providerOptions: IProviderOptions = {};

  constructor() {}
  
  connect = async (): Promise<any> => {
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: this.providerOptions, // required
    });

    try {
      this.provider = await web3Modal.connect();
      store.commit("setWalletState", true);
  
    } catch (e) {
      console.log(e)
    }
  
    // Here we will interface with vuex for state changes.
  
    // Subscribe to accounts change
    this.provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
    });
  
    // Subscribe to chainId change
    this.provider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
    });
  
    // Subscribe to provider disconnection
    this.provider.on("disconnect", (error: { code: number; message: string }) => {
      console.log(error);
    });
  };
}
