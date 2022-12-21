import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("Please enter valid Input");
    }
  };
  return (
    <div>
      <div class="container">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter your username here"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter your password here"
            />
          </div>
          <button>Sign In</button>
          <div>
            <p>
              Don't have an Account? <Link className="link" to="/register">SignUp</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
