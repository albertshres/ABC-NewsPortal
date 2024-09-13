import React from "react";

const InputField = (props) => {
  let {
    className,
    name,
    label,
    value,
    onChange,
    type,
    required,
    placeholder,
    error,
  } = props;
  return (
    <div className={className}>
      <label className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required ? required : false}
      />
      {error && (
        <p className="mt-1 m-0 p-0">
          <small className="text-danger">{error}</small>
        </p>
      )}
    </div>
  );
};

export default InputField;
