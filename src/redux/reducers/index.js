import { combineReducers } from "redux";
import { stockReducer } from "./stocksReducer";

const reducers =combineReducers({
    allStocks:stockReducer,
});
export default reducers;