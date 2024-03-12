import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Mix.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        { email }
      );
      if (response.status === 200) {
        setMessage("Reset password link sent to your email");
      }
    } catch (error) {
      setMessage("User not found");
    }
  };

  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Forgot Password</h1>
          </div>

          <form>
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
            <button onClick={handleResetPassword}>Reset Password</button>
            <p>{message}</p>
            <p>
              Remember your password? <Link to={"/"}>Log in</Link>{" "}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
