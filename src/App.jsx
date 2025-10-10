import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

const INITIAL_INVESTMENT_FACTORS = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

const isFullyPopulated = (obj) =>
  Object.values(obj).every((parameter) => parameter);

function App() {
  const [investmentFactors, setInvestmentFactors] = useState(
    INITIAL_INVESTMENT_FACTORS
  );

  const handleChangeInput = (identifier, newValue) => {
    setInvestmentFactors((prevFactors) => ({
      ...prevFactors,
      [identifier]: +newValue,
    }));
  };

  const allInputHasValue = isFullyPopulated(investmentFactors);
  const isDurationValid =
    investmentFactors.duration > 0 &&
    investmentFactors.duration <= 20 &&
    investmentFactors.duration !== "";

  return (
    <>
      <Header />
      <UserInput
        inputValues={investmentFactors}
        onValueChange={handleChangeInput}
        isDurationInvalid={!isDurationValid}
      />
      {allInputHasValue && isDurationValid && (
        <ResultsTable calculationParameters={investmentFactors} />
      )}
      {!allInputHasValue && (
        <p className="center">
          <small>
            <em>Enter value to all required fields.</em>
          </small>
        </p>
      )}
      {allInputHasValue && !isDurationValid && (
        <p className="center">
          <small>
            <em>Invalid duration.</em>
          </small>
        </p>
      )}
    </>
  );
}

export default App;
