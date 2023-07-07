import { Add, Reduce, Total} from "./ActionType"

const initialState = {
    
    subTotal:0,
}
// console.log(store)
const Reducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case Add:{
            return {
              ...state,
                counter:state.counter+payload
            }
        }
        case Reduce:{
            return {
              ...state,
                counter:state.counter-payload
            }
        }
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