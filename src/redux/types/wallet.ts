import { Wallet } from "ethers";

export enum CreationSteps {
  "INITIAL",
  "PRIVATE_KEY",
  "PUBLIC_KEY",
  "SHOW_PUBLIC_KEY",
}

export type WalletReducerState = {
  loading: boolean;
  wallet?: Wallet;
  error?: any;
  creationStep: CreationSteps;
};
