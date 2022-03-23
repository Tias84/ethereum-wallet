import { combineReducers } from "redux-immer";
import produce from "immer";
import walletReducer, { walletActions } from "./wallet";
import addressbookReducer, { addressbookActions } from "./addressbook";
import commonReducer, { commonActions } from "./common";
import transactionsReducer, { transactionActions } from "./transactions";
import walletConnectReducer, { walletConnectActions } from "./walletConnect";

const rootReducer = combineReducers(produce, {
  wallet: walletReducer,
  addressbook: addressbookReducer,
  common: commonReducer,
  transactions: transactionsReducer,
  walletConnect: walletConnectReducer,
});

export const reducersActions = {
  wallet: walletActions,
  addressbook: addressbookActions,
  common: commonActions,
  transactions: transactionActions,
  walletConnect: walletConnectActions,
};

export default rootReducer;
