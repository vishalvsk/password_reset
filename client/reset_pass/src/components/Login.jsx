import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Mix.css";

function Login() {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error(error.response.data);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome back, Log In </h1>
            <p>Hi, we are glad you are back. please login</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <button className="btn">Login</button>
            <p>
              Don't have an account? <Link to={"/register"}>Sign up</Link>{" "}
            </p>
            <p>
              <Link to={"/forgot-password"}>Forgot your password?</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
