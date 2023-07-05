import React, { useState } from "react";
import "../../src/scrren/Regis.css";
import Imagebackground from "../images/backgrond.png";
import { registrationUser } from "../scrren/API/apiURL";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useToast } from '@chakra-ui/react'

const Registration = () => {
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = async () => {
    if (!firstName || !lastName || !mobileNumber || !password) {
      setErrorMessage("All fields are required");
      return false;
    }

    const response = await registrationUser(
      firstName,
      lastName,
      mobileNumber,
      password
    );


    setFirstName("");
    setLastName("");
    setMobileNumber("");
    setPassword("");
    setErrorMessage("");
    return response.data;
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setErrorMessage("");
      navigate("/login");
    }
  };


    const handleGoogleLoginSuccess = async (credentialResponse) => {
       if(credentialResponse){
        // navigate("/dashboard");
       }

  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <div className="RegistraionHome">
        <div className="Form_div">
          <div className="Welcometext">Get Started Now</div>
          <div style={{ marginLeft: 34 }}>
            <form>
              <p style={{ margin: 0 }}>First Name</p>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="inputText"
              />
              <br /> <br />
              <p style={{ margin: 0 }}>Last Name</p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="inputText"
              />
              <br /> <br />
              <p style={{ margin: 0 }}>Phone Number</p>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="inputText"
              />
              <br /> <br />
              <p style={{ margin: 0 }}>Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputText"
              />
              <br />
              {/* <br /> */}
              <button
                type="submit"
                className="buttonRegister"
                onClick={handleRegistration}
              >
                Register
              </button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
            <div></div>
          </div>
          <div className="extrabutton">
            <GoogleOAuthProvider clientId="954246613992-d09ia50nb1re48a8d315vemi1j2641in.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </GoogleOAuthProvider>
            <br />
            <div>
              <FacebookLogin
                appId="831365798013380"
                style={{
                  backgroundColor: "#4267b2",
                  color: "#fff",
                  fontSize: "10px",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "4px",
                  height: "29px",
                  width: "231px",
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={Imagebackground}
            style={{ width: 300, height: 400 }}
            alt="background"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
