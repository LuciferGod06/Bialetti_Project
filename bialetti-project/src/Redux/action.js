// Paymentpage Action object
import {
    POST_NEW_ADDRESS,
    POST_NEW_CARD,
} from "./actionTypes";



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