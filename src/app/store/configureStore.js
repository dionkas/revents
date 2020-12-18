import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// create store with reducer
export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
