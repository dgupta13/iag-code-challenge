import { StyledPwsrdDiv, StyledButton } from "./UserInputForm.styles";
import { useState, useCallback } from "react";
import { UserInput } from "../UserInput/UserInput";
import { useDispatch, useMappedState } from "redux-react-hook";
import { SUBMIT } from "../../config/constant";
import { submitPassword } from "./modules/UserInputFormApi";

/**
 * This component allows user to enter the password and submit it to the server
 */
export const UserInputForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const mapState = useCallback(
    (state) => ({
      hint: state.pwsrdHint.hint,
    }),
    []
  );
  const { hint } = useMappedState(mapState);

  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    inputValue &&
      inputValue !== "" &&
      dispatch(
        submitPassword({
          hint: hint,
          answer: inputValue,
        })
      );
    setInputValue("");
  };

  return (
    <StyledPwsrdDiv>
      <UserInput
        value={inputValue}
        text="Type here"
        handleChange={handleChangeValue}
      />
      <br />
      <StyledButton onClick={handleButtonClick}>{SUBMIT}</StyledButton>
    </StyledPwsrdDiv>
  );
};
