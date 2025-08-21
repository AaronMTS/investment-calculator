import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import NumInput from "./components/NumInput";

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
      [identifier]: Number(newValue)
    }))
  }

  return (
    <main>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <NumInput id="initialInvestment" label="Initial Investment" onUpdateInvFactor={handleChangeInput} />
          <NumInput id="annualInvestment" label="Annual Investment" onUpdateInvFactor={handleChangeInput} />
        </div>
        <br />
        <div className="input-group">
          <NumInput id="expectedReturn" label="Expected Return" onUpdateInvFactor={handleChangeInput} />
          <NumInput id="duration" label="Duration" onUpdateInvFactor={handleChangeInput} />
        </div>
      </div>
      <ResultsTable calculationParameters={investmentFactors} />
    </main>
  );
}

export default App;
