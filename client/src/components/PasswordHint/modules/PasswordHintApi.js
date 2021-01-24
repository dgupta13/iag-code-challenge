import axios from 'axios';
import { fetchNewPassword, fetchNewPswrdSuccess, fetchNewPswrdError } from './PasswordHintAction';

export const getNewPassword = () => {
    return dispatch => {
        dispatch(fetchNewPassword());
        return axios
            .get(process.env.REACT_APP_API_ENDPOINT + '/new-password')
            .then(res => {
                dispatch(fetchNewPswrdSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchNewPswrdError(err));
            });
    }
}