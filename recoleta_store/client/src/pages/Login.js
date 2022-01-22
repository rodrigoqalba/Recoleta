import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import logo from '../assets/Recoleta-logos_transparent copy.png'
import { Button } from "../styles";
import './Login.css'

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} height={200} width={450} alt="Recoleta Logo" />
      </div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p className="lettering">
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;