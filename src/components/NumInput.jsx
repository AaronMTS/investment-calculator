import { useState } from "react";

const NumInput = ({ label, onUpdateInvFactor, ...props }) => {
    const [currentValue, setCurrentValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;

        setCurrentValue(newValue);
        onUpdateInvFactor(props.id, newValue);
    }

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input type="number" value={currentValue} onChange={handleInputChange} {...props} />
    </div>
  );
};

export default NumInput;
