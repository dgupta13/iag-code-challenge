import { combineReducers } from 'redux';
import { passwordhintReducer } from './components/PasswordHint/modules/PasswordHintReducer'
import { userInputFormReducer } from './components/UserInputForm/modules/UserInputFormReducer';

/**
 * This function combines all the reducers into on object which updates the states of the redux store
 */
export default combineReducers({
    pwsrdHint: passwordhintReducer,
    submit: userInputFormReducer
});