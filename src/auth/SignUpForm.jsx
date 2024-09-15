import React, { useState } from "react";
import {
  InputField,
  PasswordField,
  RadioInput,
} from "../components/shared/form";

function SignUpForm({ onSignUp }) {
  const [loading, setLoading] = useState(false);

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
    loading: false,
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

  const handleSubmit = async (e) => {
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
      /*
      onSignUp(data);
      console.log("@data", data);
      setState({ ...state, data: {}, error: {} });
    */

      try {
        setState({ ...state, loading: true });

        const response = await fetch(
          "https://backend-news-portal.vercel.app/api/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              password: data.password,
              phone: data.phone,
              gender: data.gender,
              age: data.age,
            }),
          }
        );

        const result = await response.json();
        setState({ ...state, loading: false }); // Unset loading state
        if (response.ok) {
          onSignUp(result);
          setState({ ...state, data: {}, error: {} }); // Reset form state
          console.log("@data", result);
        } else {
          setState({
            ...state,
            error: {
              ...error,
              server: result.message || "Something went wrong",
            },
          });
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          error: {
            ...error,
            server: "Network error. Please try again later.",
          },
        });
      }
    } else {
      setState({
        ...state,
        error: {
          name: !data?.name ? "Name field is required." : "",
          email: !data?.email ? "Email field is required." : "",
          password: !data?.password ? "Password field is required." : "",
          confirmPassword: !data?.confirmPassword
            ? "Confirm password field is required"
            : "",
          phone: !data?.phone ? "Phone field is required." : "",
          gender: !data?.gender ? "Gender field is required." : "",
          age: !data?.age ? "Age field is required." : "",
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

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignUpForm;
