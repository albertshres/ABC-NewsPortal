import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/auth/login";

  const handleLogin = (data) => {
    console.log("Login data:", data);
  };

  const handleSignUp = (data) => {
    console.log("Sign up data:", data);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="w-50 max-w-md p-5 bg-white rounded shadow">
        {isLogin ? (
          <>
            <LoginForm onLogin={handleLogin} />
            <p className="mt-4 text-center text-muted">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/auth/signup")}
                className="btn btn-link p-0"
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onSignUp={handleSignUp} />
            <p className="mt-4 text-center text-muted">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/auth/login")}
                className="btn btn-link p-0"
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
