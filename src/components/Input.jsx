import { memo } from "react";

const Input = memo(function Input({
  inputId,
  label,
  inputValue,
  unit,
  unitId,
  unitPosition,
  handleChange,
  ...props
}) {
  const inputElement = (
    <input
      {...props}
      type="number"
      id={inputId}
      required
      value={inputValue}
      onChange={(event) => handleChange(inputId, event.target.value)}
    />
  );

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      {unit && (
        <span className="with-unit-container">
          {inputElement}
          <span
            id={unitId || undefined}
            className={`${
              unitPosition.toLowerCase() === "start"
                ? "investment-unit"
                : undefined
            } input-unit ${unitPosition.toLowerCase()}`}
          >
            {unit}
          </span>
        </span>
      )}
      {!unit && inputElement}
    </div>
  );
});

export default Input;
