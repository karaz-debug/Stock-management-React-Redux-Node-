import { ActionTypes } from "../contants/action-types";

const initialState = {
    stocks:[]
}
export const stockReducer = (state = initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.ADD_STOCK:
            return {...state,stocks : payload};
        default:
            return state;
    }

}