import { GET_NEW_PSWRD, NEW_PSWRD_SUCCESS, NEW_PSWRD_ERROR } from '../../../config/constant';

const initialState = {
    loading: false,
    hint: '',
    hasError: false
}

export const passwordhintReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_PSWRD:
            return {
                ...state,
                loading: true,
                hasError: false
            }
        case NEW_PSWRD_SUCCESS:
            return {
                ...state,
                loading: false,
                hint: action.payload.hint
            }
        case NEW_PSWRD_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                hint: ''
            }
        default:
            return state;
    }
}