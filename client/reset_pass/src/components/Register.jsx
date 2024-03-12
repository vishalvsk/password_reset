import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Mix.css";

function Register() {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!val.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!val.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!val.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (val.password !== val.cpassword) {
      errors.cpassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const setvalue = (e) => {
    const { name, value } = e.target;

    setVal(() => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          {
            name: val.name,
            email: val.email,
            password: val.password,
          }
        );
        console.log(response.data);
        // Reset form fields after successful registration
        setVal({
          name: "",
          email: "",
          password: "",
          cpassword: "",
        });
      } catch (error) {
        console.error(error.response.data);
      }
    } else {
      console.log("Form is invalid, cannot submit");
    }
  };

  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form_input">
              <label style={{ textAlign: "start" }} htmlFor="Name">
                Name
              </label>
              <input
                onChange={setvalue}
                type="name"
                name="name"
                id="name"
                placeholder="Enter your Name"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                onChange={setvalue}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  onChange={setvalue}
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  onChange={setvalue}
                  type={!cpassShow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                />
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
              {errors.cpassword && <p className="error">{errors.cpassword}</p>}
            </div>
            <button className="btn">Register</button>
            <p>
              Already have an account <Link to={"/"}>Login</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
