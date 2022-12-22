import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const SignUp = () => {
  const form = useRef();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Local storage
  const handleSubmit = (e) => {
    // Email JS start
    e.preventDefault();
    emailjs.sendForm(
        "service_udr72os",
        "template_97oon0r",
        e.target,
        "bodIECJ7UrGrFBVx7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    // Email JS end

    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Register");
  };

  return (
    <div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your Username"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="password"
              placeholder="*******"
              required
            />
          </div>
          <button>Sign Up</button>

          <div>
            <p>
              Already have an Account? <Link to="/SignIn" className="link"><strong>SignIn</strong></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
