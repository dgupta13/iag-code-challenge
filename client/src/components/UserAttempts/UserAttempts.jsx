import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import { UserInput } from "../UserInput/UserInput";
import { StyledPwsrdDiv } from "../UserInputForm/UserInputForm.styles";

export const UserAttempts = () => {
  const mapState = useCallback(
    (state) => ({
      inputPswrd: state.submit.inputPswrd,
      highlight: state.submit.highlight,
    }),
    []
  );
  const { inputPswrd, highlight } = useMappedState(mapState);
  const element =
    inputPswrd.length > 0 ? (
      inputPswrd.map((item, index) => {
        return (
          <>
            <UserInput
              value={item.split("").join(" ")}
              readOnly={true}
              highlight={highlight}
              key={item + index}
            />
            <br /> <br />
          </>
        );
      })
    ) : (
      <></>
    );

  return <StyledPwsrdDiv>{element}</StyledPwsrdDiv>;
};
