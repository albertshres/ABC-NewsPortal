import React, { useState } from "react";
import { InputField, PasswordField, RadioInput } from "../shared/form";

function SignUpForm({ onSignUp }) {
  let initState = {
    data: {
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      age: "",
      confirmPassword: "",
    },
    error: {},
  };

  const [state, setState] = useState({ ...initState });

  const onChange = (e) => {
    const { target } = e;
    const { name, type } = e.target;
    let { data, error } = { ...state };
    const value = e.target.value;
    // type === "file"    /// for multiple case handler i.e. image, checkbox and normal input
    //   ? target.files[0]
    //   : type === "checkbox"
    //   ? target.checked === true
    //     ? 1
    //     : 0
    //   : target.value;
    if (error[name] !== "") error[name] = "";
    data[name] = value;
    setState({ ...state, data, error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { data } = { ...state };
    if (data?.password !== data?.confirmPassword) {
      setState({ ...state, error: { password: "Passwords do not match" } });
    } else if (
      data?.email &&
      data?.password &&
      data?.name &&
      data?.phone &&
      data?.age &&
      data?.gender
    ) {
      onSignUp(data);
      console.log("@data", data);
      setState({ ...state, data: {}, error: {} });
    } else {
      setState({
        ...state,
        error: {
          name: "Name field is required.",
          email: "Email field is required.",
          password: "Passwords field is required",
          confirmPassword: "Confirm password field is required",
        },
      });
    }
  };

  let { data, error } = state;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Sign Up</h2>
      <InputField
        className="mb-3"
        label="Name"
        type="text"
        name="name"
        value={data?.name}
        placeholder="Please enter your name"
        onChange={(e) => onChange(e)}
        required={true}
        error={error?.name}
      />
      <InputField
        className="mb-3"
        label="Email"
        type="email"
        name="email"
        value={data?.email}
        placeholder="Please enter your email"
        onChange={(e) => onChange(e)}
        required={true}
        error={error?.email}
      />
      <PasswordField
        className="mb-3"
        label="Password"
        name="password"
        value={data?.password}
        placeholder="Please enter your password"
        onChange={(e) => onChange(e)}
        required={true}
        error={error?.password}
      />
      <PasswordField
        className="mb-3"
        label="Confirm Password"
        name="confirmPassword"
        value={data?.confirmPassword}
        placeholder="Please enter your confirm password"
        onChange={(e) => onChange(e)}
        required={true}
        error={error?.confirmPassword}
      />
      <InputField
        className="mb-3"
        label="Phone Number"
        type="number"
        name="phone"
        value={data?.phone}
        placeholder="Please enter your phone number"
        onChange={(e) => onChange(e)}
        required={true}
        error={error?.phone}
      />
      <InputField
        className="mb-3"
        label="Age"
        type="number"
        name="age"
        value={data?.age}
        placeholder="Please enter your age"
        onChange={(e) => onChange(e)}
        required={false}
        error={error?.age}
      />
      <RadioInput
        className="mb-3"
        label="Gender"
        name="gender"
        value={data?.gender}
        onChange={(e) => onChange(e)}
        required={false}
        options={[
          { id: "male", value: "male", label: "Male" },
          { id: "female", value: "female", label: "Female" },
          { id: "other", value: "other", label: "Other" },
        ]}
        error={error?.gender}
      />

      <button type="submit" className="btn btn-primary w-100">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
