import { createStore } from "redux";
import testReducer from "../../features/sandbox/testReducer";

// create store with reducer
export function configureStore() {
  return createStore(testReducer);
}
