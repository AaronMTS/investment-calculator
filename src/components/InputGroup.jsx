import Input from "./Input";

const InputGroup = ({ inputValues, onValueChange, isDurationInvalid }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    {...inputValues};
  let durationStyling = "";

  if (inputValues.duration && isDurationInvalid) {
    durationStyling = "invalid";
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          inputId="initialInvestment"
          label="Initial Investment"
          inputValue={initialInvestment}
          unit="$"
          unitPosition="start"
          handleChange={onValueChange}
        />
        <Input
          inputId="annualInvestment"
          label="Annual Investment"
          inputValue={annualInvestment}
          unit="$"
          unitPosition="start"
          handleChange={onValueChange}
        />
      </div>
      <div className="input-group">
        <Input
          inputId="expectedReturn"
          label="Expected Return"
          inputValue={expectedReturn}
          unit="%"
          unitId="return-unit"
          unitPosition="end"
          handleChange={onValueChange}
        />
        <Input
          inputId="duration"
          label="Duration (max: 20)"
          inputValue={duration}
          unit="years"
          unitId="duration-unit"
          unitPosition="end"
          handleChange={onValueChange}
          className={durationStyling}
        />
      </div>
    </div>
  );
};

export default InputGroup;
