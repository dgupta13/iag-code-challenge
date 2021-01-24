import { SUBMIT_REQUEST, SUBMIT_REQUEST_SUCCESS, SUBMIT_REQUEST_ERROR } from '../../../config/constant';

export const submitRequest = () => {
    return {
        type: SUBMIT_REQUEST,
        payload: ''
    }
}

export const submitRequestSuccess = (response) => {
    return {
        type: SUBMIT_REQUEST_SUCCESS,
        payload: response
    }
}

export const submitRequestError = (response) => {
    return {
        type: SUBMIT_REQUEST_ERROR,
        payload: response
    }
}