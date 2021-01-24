import {GET_NEW_PSWRD, NEW_PSWRD_SUCCESS, NEW_PSWRD_ERROR} from '../../../config/constant';

export const fetchNewPassword = () => {
    return {
        type: GET_NEW_PSWRD,
        payload: ''
    }
}

export const fetchNewPswrdSuccess = (response) => {
    return {
        type: NEW_PSWRD_SUCCESS,
        payload: response
    }
}

export const fetchNewPswrdError = (response) => {
    return {
        type: NEW_PSWRD_ERROR,
        payload: response
    }
}