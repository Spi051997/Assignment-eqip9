import React, { useState } from "react";
import '../../src/scrren/Regis.css';
import Imagebackground from '../images/backgrond.png';
import { login } from '../scrren/API/apiURL';
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

const Login = () => {
  const toast = useToast();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const validateForm = async () => {
    if (!mobileNumber || !password) {
      setErrorMessage('All fields are required');
      return false;
    }

    try {
      const response = await login(mobileNumber, password);

      if (response && response.data) {
        // Login successful
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setErrorMessage('');
        setLoginSuccess(true);
        navigate("/dashboard", { state: { mobileNumber: mobileNumber } });
        return true;
      }
    } catch (error) {
      // Login failed due to an error in the API call
      setErrorMessage('Invalid credentials. Please check your mobile number and password.');
      setLoginSuccess(false);
      return false;
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (await validateForm()) {
      setMobileNumber('');
      setPassword('');

      if (loginSuccess) {
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        
      }
    }
  }

  return (
    <>
      <div className="RegistraionHome">
        <div className="Form_div">
          <div className="Welcometext">
            Welcome User
          </div>
          <div style={{ marginLeft: 34 }}>
            <form>

              <p style={{ margin: 0 }}>Phone Number</p>
              <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="inputText" />
              <br /> <br />
              <p style={{ margin: 0 }}>Password</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputText" />
              <br />
              <br />
              <button type="submit" className="buttonRegister" onClick={handleRegistration}>
                Login
              </button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
          </div>
          <div className="extrabutton">

            {/* <div>Apple</div> */}
          </div>
        </div>

        <div>
          <img src={Imagebackground} style={{ width: 300, height: 400 }} alt="background" />
        </div>
      </div>
    </>
  )
}

export default Login;
