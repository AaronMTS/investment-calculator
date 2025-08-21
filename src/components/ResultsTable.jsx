import { calculateInvestmentResults, formatter } from "../util/investment.js";

const isFullyPopulated = (obj) => Object.values(obj).every(parameter => parameter)

const noDataFallback = (
  <tr>
    <td colSpan={5} className="center">
      <small>
        <em>Enter value to all required fields...</em>
      </small>
    </td>
  </tr>
);

const ResultsTable = ({ calculationParameters }) => {
  const { initialInvestment } =
    calculationParameters;
  let investmentInterests;

  if (isFullyPopulated(calculationParameters)) {
    investmentInterests = calculateInvestmentResults(calculationParameters);
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
        {!investmentInterests && noDataFallback}
      </tbody>
    </table>
  );
};

export default ResultsTable;
