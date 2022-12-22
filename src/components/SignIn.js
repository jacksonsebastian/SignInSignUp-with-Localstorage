import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = (e) => {
    e.preventDefault();
    const signeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === signeduser.email &&
      input.password === signeduser.password
    ) {
      localStorage.setItem("signedIn", true);
      navigate("/");
    } else {
      alert("Please enter valid Input");
    }
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSignIn}>
          <h1>SignIn</h1>
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
              Don't have an Account? <Link className="link" to="/SignUp"><strong>SignUp</strong></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
