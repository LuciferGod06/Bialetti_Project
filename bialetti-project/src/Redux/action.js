export const handleProductData = (payload) =>{
    return {
            type:"DATAUPDATE",
            payload
        }
}
export const handleLoading = () =>{
    return {
            type:"UPDATELOADING"
        }
}