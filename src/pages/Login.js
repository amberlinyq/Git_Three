import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginInitiate, googleSignInInitiate } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "../utilities";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const dispatch = useDispatch();
  const { email, password } = state;
  const handChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <Box justify={"center"}>            
            <Button onClick={handleGoogleSignIn} text={"Google"} />
          </Box>

          <p>OR</p>
          <input
            type="email"
            id="inputEmail"
            placeholder="Email Address"
            name="email"
            onChange={handChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            placeholder="Password"
            name="password"
            onChange={handChange}
            value={password}
            required
          />
          <button type="submit">submit</button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
