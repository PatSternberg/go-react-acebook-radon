import { Link, useNavigate } from "react-router-dom";

import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const login = () => {
    if (token) {
      navigate('/posts');
    } else {
      navigate('/login');
    };
  };

  const signup = () => {
    navigate('/signup');
  };

  return (
    <div className="home">
      <h1 role="heading">Welcome to Acebook!</h1>
      <h4 role="subheading"><em>Acebook is the fastest growing app for sharing posts with pals.</em></h4>
      <div className='homepageButtons'>
        <button role='loginButton' onClick={login}>Login</button>
        <button role='signupButton' onClick={signup}>Signup</button>
      </div>
    </div>
  );
};
