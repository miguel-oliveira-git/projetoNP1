import React from "react";

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
