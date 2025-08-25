import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

const INITIAL_INVESTMENT_FACTORS = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
};

function App() {
  const [investmentFactors, setInvestmentFactors] = useState(
    INITIAL_INVESTMENT_FACTORS
  );

  const handleChangeInput = (identifier, newValue) => {
    setInvestmentFactors(prevFactors => ({
      ...prevFactors,
      [identifier]: +newValue
    }))
  }

  return (
    <>
      <Header />
      <UserInput inputValues={investmentFactors} onValueChange={handleChangeInput} />
      <ResultsTable calculationParameters={investmentFactors} />
    </>
  );
}

export default App;
