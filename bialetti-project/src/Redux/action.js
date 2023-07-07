import { Add, Reduce, Total } from "./ActionType"

const handlAdd=(AddPay)=>{
    return {type:Add, payload:AddPay}
}
const handlRed=(RedPay)=>{
    return {type:Reduce, payload:RedPay}
}

const SubToal=(total)=>{
    return {type:Total,payload:total}
}
export {handlAdd,handlRed,SubToal}