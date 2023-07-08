// Paymentpage Action object
import {
    POST_NEW_ADDRESS,
    POST_NEW_CARD,
} from "./actionTypes";

import { Total } from "./actionTypes"

const postNewAddressAction = (payload) => {
    return {
        type: POST_NEW_ADDRESS,
        payload,
    };
};

const postNewCardAction = (payload) => {
    return {
        type: POST_NEW_CARD,
        payload,
    };
};

export const postNewAddress = (payload) => (dispatch) => {
    dispatch(postNewAddressAction(payload));
};

export const postnewCard = (paylaod) => (dispatch) => {
    dispatch(postNewCardAction(paylaod));
};

//cart page action types

const SubToal = (total) => {
    return { type: Total, payload: total }
}
export { SubToal }


//product page actions
export const handleProductData = (payload) => {
    return {
        type: "DATAUPDATE",
        payload
    }
}
export const handleLoading = () => {
    return {
        type: "UPDATELOADING"
    }
}