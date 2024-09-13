import React, { useState } from "react";

const PasswordField = (props) => {
  let {
    className,
    name,
    label,
    value,
    onChange,
    required,
    placeholder,
    error,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={className}>
      <label className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <div className="input-group">
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required ? required : false}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && (
        <p className="mt-1 m-0 p-0">
          <small className="text-danger">{error}</small>
        </p>
      )}
    </div>
  );
};

export default PasswordField;
