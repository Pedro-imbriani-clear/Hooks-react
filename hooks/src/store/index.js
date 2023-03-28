import { reducer } from "./reducers"
import {add2ToNumber} from './action/number'
 const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}
export{
    reducer,
    initialState,
  
}
