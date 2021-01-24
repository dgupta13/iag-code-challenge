import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getNewPassword } from "./PasswordHintApi";

const mockStore = configureMockStore([thunk]);
jest.mock("axios");

describe("PasswordHintApi", () => {
  const response = {
    data: {
      hint: "1234",
    },
  };
  it("test getNewPassword api success", async () => {
    const store = mockStore({});
    axios.get.mockResolvedValue(response);
    const expectedActions = [
      { type: "GET_NEW_PSWRD", payload: "" },
      { type: "NEW_PSWRD_SUCCESS", payload: { hint: "1234" } },
    ];
    await store.dispatch(getNewPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("test getNewPassword api error", async () => {
    const store = mockStore({});
    const errorResponse = {
      error: "Error",
    };
    axios.get.mockRejectedValue(errorResponse);
    const expectedActions = [
      { type: "GET_NEW_PSWRD", payload: "" },
      { type: "NEW_PSWRD_ERROR", payload: errorResponse},
    ];
    await store.dispatch(getNewPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
