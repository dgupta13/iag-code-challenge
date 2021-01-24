import { useEffect, useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getNewPassword } from "./modules/PasswordHintApi";
import { StyledHintDiv } from "./PasswordHint.styles";

export const PasswordHint = () => {
  const dispatch = useDispatch();
  const mapState = useCallback(
    (state) => ({
      hint: state.pwsrdHint.hint,
    }),
    []
  );
  const { hint } = useMappedState(mapState);
  useEffect(() => {
    dispatch(getNewPassword());
  }, [dispatch]);
  return <StyledHintDiv>{hint.split("").join(" ")}</StyledHintDiv>;
};
