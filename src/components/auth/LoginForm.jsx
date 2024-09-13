import React, { useState } from "react";
import { InputField, PasswordField } from "../shared/form";

function LoginForm({ onLogin }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  let initState = {
    data: {
      email: "",
      password: "",
    },

    error: {
      email: "",
      password: "",
    },
  };

  const [state, setState] = useState({ ...initState });

  //destructuring for easy access
  let { data, error } = { ...state };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (error[name]) {
      error[name] = "";
    }
    setState({
      ...state,
      data: {
        ...data,
        [name]: value,
      },
      error: {
        ...error,
        [name]: "",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   if (email && password) {
    //     onLogin({ email, password });
    //     setError("");
    //   } else {
    //     setError("Please fill in all fields");
    //   }

    // Check if email and password are filled
    if (data.email && data.password) {
      onLogin(data);
      setState(initState); // Reset form state
    } else {
      setState({
        ...state,
        error: {
          email: data?.email ? "" : "Email must be provided",
          password: data?.password ? "" : "Password must be provided",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Login</h2>

      <InputField
        className="mb-3"
        label="Email"
        type="email"
        name="email"
        value={data?.email}
        placeholder="Enter your email"
        onChange={onChange}
        required={true}
        error={error?.email}
      />
      <PasswordField
        className="mb-3"
        label="Password"
        name="password"
        value={data?.password}
        placeholder="Please enter your password"
        onChange={onChange}
        required={true}
        error={error?.password}
      />
      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
