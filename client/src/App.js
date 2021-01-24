import { PasswordHint } from "./components/PasswordHint/PasswordHint";
import Title from "./components/Title/Title";
import { UserAttempts } from "./components/UserAttempts/UserAttempts";
import { UserInputForm } from "./components/UserInputForm/UserInputForm";

/**
 * This is the root level component for the page
 */

export const App = () => {
  return (
    <>
      <Title />
      <PasswordHint />
      <UserAttempts />
      <UserInputForm />
    </>
  );
}

export default App;
