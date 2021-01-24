import {
  SUBMIT_REQUEST,
  SUBMIT_REQUEST_SUCCESS,
  SUBMIT_REQUEST_ERROR,
} from "../../../config/constant";

const initialState = {
  loading: false,
  pswrdCorrect: false,
  inputPswrd: [],
  highlight: [],
  hasError: false
};

export const userInputFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case SUBMIT_REQUEST_SUCCESS:
      const inputArray = [...state.inputPswrd, action.payload.answer];
      return {
        ...state,
        loading: false,
        pswrdCorrect: action.payload.correct,
        highlight: action.payload.highlight ? action.payload.highlight : [],
        inputPswrd: inputArray,
        hint: action.payload.hint,
      };
    case SUBMIT_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        pswrdCorrect: false,
        highlight: [],
      };
    default:
      return state;
  }
};
