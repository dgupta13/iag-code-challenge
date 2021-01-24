import axios from 'axios';
import { submitRequest, submitRequestSuccess, submitRequestError} from './UserInputFormAction';

export const submitPassword = (payload) => {
    const header = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return dispatch => {
        dispatch(submitRequest());
        axios
            .post(process.env.REACT_APP_API_ENDPOINT + '/verify-password', payload, header)
            .then(res => {
                dispatch(submitRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(submitRequestError(err.message));
            });
    }
}