import { useCallback, useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import InputGroup from "./components/InputGroup";

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

  const handleChangeInput = useCallback((identifier, newValue) => {
    setInvestmentFactors((prevFactors) => ({
      ...prevFactors,
      [identifier]: +newValue || "",
    }));
  }, []);

  const allInputHasValue = isFullyPopulated(investmentFactors);
  const isDurationValid =
    investmentFactors.duration > 0 &&
    investmentFactors.duration <= 20 &&
    investmentFactors.duration !== "";

  return (
    <>
      <div>
        <Header />
        <InputGroup
          inputValues={investmentFactors}
          onValueChange={handleChangeInput}
          isDurationInvalid={!isDurationValid}
        />
        {allInputHasValue && isDurationValid && (
          <div id="result_container">
            <ResultsTable calculationParameters={investmentFactors} />
          </div>
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
      </div>
      <footer>
        <p>
          This was created as part of an online course offered by Maximilian
          Schwarzmüller
        </p>
      </footer>
    </>
  );
}

export default App;
