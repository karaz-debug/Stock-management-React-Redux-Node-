import { ActionTypes } from "../contants/action-types";

export const addStocks = (stock)=>{
    return{
        type: ActionTypes.ADD_STOCK,
        payload:stock,
    };
};
export const dispayStocks = (stocks)=>{
    return{
        type: ActionTypes.ADD_STOCK,
        payload:stocks,
    };
};