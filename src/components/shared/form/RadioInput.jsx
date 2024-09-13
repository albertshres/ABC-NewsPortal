import React from "react";

const RadioInput = (props) => {
  let { className, name, label, required, value, options, onChange, error } =
    props;

  return (
    <div className={className}>
      <label className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <div>
        {options.map((o, i) => {
          return (
            <label className="form-check form-check-inline" key={i}>
              <input
                id={o.id}
                type="radio"
                name={name}
                value={o.value}
                checked={value === o.value}
                onChange={onChange}
                className="form-check-input"
              />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-1 m-0 p-0">
          <small className="text-danger">{error}</small>
        </p>
      )}
    </div>
  );
};

export default RadioInput;
