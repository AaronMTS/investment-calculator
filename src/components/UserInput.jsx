const UserInput = ({ inputValues, onValueChange, isDurationInvalid }) => {
  let durationStyling = "";

  if (inputValues.duration && isDurationInvalid) {
    durationStyling = "invalid";
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init_investment">Initial Investment</label>
          <input
            type="number"
            id="init_investment"
            required
            value={inputValues.initialInvestment}
            onChange={(event) =>
              onValueChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="ann_investment">Annual Investment</label>
          <input
            type="number"
            id="ann_investment"
            required
            value={inputValues.annualInvestment}
            onChange={(event) =>
              onValueChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="exp_return">Expected Return</label>
          <input
            type="number"
            id="exp_return"
            required
            value={inputValues.expectedReturn}
            onChange={(event) =>
              onValueChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="inv_duration">Duration (max: 20)</label>
          <input
            className={durationStyling}
            type="number"
            id="inv_duration"
            required
            value={inputValues.duration}
            onChange={(event) => onValueChange("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;
