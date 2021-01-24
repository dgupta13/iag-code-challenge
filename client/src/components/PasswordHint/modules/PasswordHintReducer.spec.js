import { passwordhintReducer } from "./PasswordHintReducer";
import {
  GET_NEW_PSWRD,
  NEW_PSWRD_SUCCESS,
  NEW_PSWRD_ERROR,
} from "../../../config/constant";

const initialState = {
  loading: false,
  hint: "",
  hasError: false,
};

describe("PasswordHintReducer", () => {
  it("update the state with GET_NEW_PSWRD action", () => {
    const action = {
      type: GET_NEW_PSWRD,
    };
    const result = {
      loading: true,
      hint: "",
      hasError: false,
    };
    expect(passwordhintReducer(initialState, action)).toEqual(result);
  });
  // Similar testcases can be written for other actions
});
