const intitaldata = {
    ProductData: [],
    loading: true
}

export const productReducer = (state = intitaldata, { type, payload }) => {

    switch (type) {
        case 'DATAUPDATE':
            return {
                ...state,
                ProductData: payload,
                loading: false
            }
        case 'UPDATELOADING':
            return {
                ...state,
                ProductData: [],
                loading: true
            }
    }
    return state;

}
