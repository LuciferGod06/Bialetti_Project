import { Total} from "./ActionType"

const initialState = {
    
    subTotal:0,
}
// console.log(store)
const Reducer = (state = initialState, {type,payload}) => {
    switch(type) {
      
        case Total:{
            return {
              ...state,
                subTotal:payload
            }
        }

        

        default: return state
    }
}
export default Reducer