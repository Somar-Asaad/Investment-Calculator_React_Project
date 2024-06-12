import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import TableData from "./components/TableData";
function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 1500,
    annualInvestment: 900,
    expectedReturn: 10,
    duration: 6,
  });

  const isValid = inputValue.duration >= 1;

  function handleInputChange(targetedInputField, theNewValue) {
    setInputValue((prevValues) => {
      return {
        ...prevValues,
        [targetedInputField]: +theNewValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput UserInput={inputValue} handleInputChange={handleInputChange} />
      {!isValid && <p className="center">Please Enter a valid Input</p>}
      {isValid && <TableData data={inputValue} />}
    </>
  );
}

export default App;
