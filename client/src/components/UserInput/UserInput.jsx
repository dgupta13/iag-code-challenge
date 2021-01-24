import { StyledInput } from "./UserInput.styles";

export const UserInput = ({ value, text, readOnly = false, handleChange }) => {
  const element = readOnly ? (
    <StyledInput value={value} readOnly />
  ) : (
    <StyledInput
      value={value}
      placeholder={text}
      onChange={(event) => handleChange(event)}
    />
  );
  return <>{element}</>;
};
