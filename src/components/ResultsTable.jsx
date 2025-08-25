import { calculateInvestmentResults, formatter } from "../util/investment.js";

const ResultsTable = ({ calculationParameters }) => {
  const { initialInvestment, duration } =
    calculationParameters;
  const investmentInterests = calculateInvestmentResults(calculationParameters);

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
        {investmentInterests.map((rows, index) => {
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
      </tbody>
    </table>
  );
};

export default ResultsTable;
