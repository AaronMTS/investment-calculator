import { calculateInvestmentResults, formatter } from "../util/investment.js";

const isFullyPopulated = (obj) => Object.values(obj).every(parameter => parameter)

const invalidInputFallback = (errorMessage) => (
  <tr>
    <td colSpan={5} className="center">
      <small>
        <em>{errorMessage}</em>
      </small>
    </td>
  </tr>
);

const ResultsTable = ({ calculationParameters }) => {
  const { initialInvestment, duration } =
    calculationParameters;
  let investmentInterests;
  let allInputHasValue;

  const inputIsValid = duration > 0 && duration !=='';

  if (isFullyPopulated(calculationParameters)) {
    allInputHasValue = true;
    investmentInterests = inputIsValid && calculateInvestmentResults(calculationParameters);
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentInterests &&
          investmentInterests.map((rows, index) => {
            const investedCapital = initialInvestment + (rows.annualInvestment * rows.year);

            return (
            <tr key={index}>
              <td>{rows.year}</td>
              <td>{formatter.format(rows.valueEndOfYear)}</td>
              <td>{formatter.format(rows.interest)}</td>
              <td>{formatter.format(rows.valueEndOfYear - investedCapital)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
          })}
        {!allInputHasValue && invalidInputFallback("Enter value to all required fields...")}
        {(allInputHasValue && !inputIsValid) && invalidInputFallback("Enter a duration greater than zero.") }
      </tbody>
    </table>
  );
};

export default ResultsTable;
