import { createAction, ActionType } from "typesafe-actions";

import {
  WALLET_IMPORT_REQ,
  WALLET_REGISTER_REQ,
  WALLET_REGISTER_OK,
  WALLET_REGISTER_FAIL,
  ADDRESSBOOK_FETCH_REQ,
  ADDRESSBOOK_FETCH_OK,
  ADDRESSBOOK_FETCH_FAIL,
  NEW_REGISTRATION_EVENT,
  BALANCE_UPDATE_REQ,
  BALANCE_UPDATE_OK,
  BALANCE_UPDATE_FAIL,
} from "./actionTypes";

// Import wallet Request
export const importWallet = createAction(
  WALLET_IMPORT_REQ,
  (key: any) => key
)();

// Generate Wallet Request
// ? Is it good? I have to put the name inside a variable,
// ? but conceptually this is the path I have chosen.
// ? In order not to overturn the epics that otherwise required the use of other
// ? operators and would make everything more complicated to do.
// ? If all goes well I proceed to replace all the actions in this way
// export const generateWallet = createAction(WALLET_GENERATE_REQ)();
export const generateWallet = createAction("wallet/generateWallet")();

// Wallet has been successfully generated
export const generateWalletOk = createAction(
  //   WALLET_GENERATE_OK,
  "wallet/generateWalletOk",
  (wallet: any) => ({ wallet })
)();

// Wallet failed
export const generateWalletFail = createAction(
  // WALLET_GENERATE_FAIL,
  "wallet/generateWalletFail",
  (error: any) => ({ error })
)();

// Reset error
// export const resetError = createAction(WALLET_RESET_ERROR)();
export const resetError = createAction("wallet/resetError")();

// Store the current block at time of wallet generation
export const generateWalletCurrentBlock = createAction(
  // WALLET_GENERATE_CURR_BLOCK,
  "wallet/generateWalletCurrentBlock",
  (blockNumber: number) => ({ blockNumber })
)();

// Next creation step
export const walletStepsNext = createAction("wallet/walletStepsNext")();
// export const walletStepsNext = createAction(WALLET_STEPS_NEXT)();

// Register Wallet Request
export const registerWallet = createAction(WALLET_REGISTER_REQ)();

// Wallet has been succesfully registered
export const registerWalletOk = createAction(
  WALLET_REGISTER_OK,
  (address: string) => ({ address })
)();

// Wallet registration failed
export const registerWalletFail = createAction(
  WALLET_REGISTER_FAIL,
  (address: string, error: any) => ({ address, error })
)();

// Address book fetch request
export const addressBookFetch = createAction(ADDRESSBOOK_FETCH_REQ)();

// All users from address book have been succesfully retrieved
export const addressBookFetchOk = createAction(
  ADDRESSBOOK_FETCH_OK,
  (addresses: Array<string>) => ({ addresses })
)();

// Failed to fetch address book
export const addressBookFetchFail = createAction(
  ADDRESSBOOK_FETCH_FAIL,
  (error: any) => ({ error })
)();

// New registration event
export const newRegistrationEvent = createAction(
  NEW_REGISTRATION_EVENT,
  (event: any) => ({ event })
)();

// Whenever the balance is updated from listener
export const balanceUpdate = createAction(
  BALANCE_UPDATE_REQ,
  (address: string) => ({
    address,
  })
)();

// Whenever the balance is updated from listener
export const balanceUpdateOk = createAction(
  BALANCE_UPDATE_OK,
  (newBalance: number) => ({ newBalance })
)();

// Whenever the balance is updated from listener
export const balanceUpdateFail = createAction(
  BALANCE_UPDATE_FAIL,
  (error: any) => ({
    error,
  })
)();

const WalletActions = {
  importWallet,
  generateWallet,
  generateWalletOk,
  generateWalletFail,
  registerWallet,
  registerWalletOk,
  registerWalletFail,
  addressBookFetch,
  addressBookFetchOk,
  addressBookFetchFail,
  newRegistrationEvent,
  balanceUpdate,
  balanceUpdateOk,
  balanceUpdateFail,
};

export type WalletAction = ActionType<typeof WalletActions>;
