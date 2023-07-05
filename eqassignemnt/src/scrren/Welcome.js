import React, { useEffect, useState } from "react";
import "../scrren/welcome.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetail } from "../scrren/API/apiURL";

const Welcome = () => {
  const location = useLocation();
  // console.log(location)
  const mobileNumber = location.state?.mobileNumber || "";
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [greeting, setGreeting] = useState("");

  const response = async () => {
    const dataresponse = await getDetail(mobileNumber);
    const data = dataresponse.data;
    return data;
  };

  useEffect(() => {
    const fetchDate = async () => {
      const data = await response();
      setfirstName(data.firstname);
      setlastName(data.lastname);
    };
    fetchDate();
  }, []);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 4 && currentHour < 12) {
      setGreeting("🌄 Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("🕛 Good Afternoon");
    } else {
      setGreeting("🌃 Good  Evening");
    }
  }, []);

  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="WelcomeHome">
      <button type="submit" className="buttonRegister" onClick={handlelogout}>
        Logout
      </button>
      <div className="welcomename">
        👋 {greeting} Mr. {firstName} {lastName}
      </div>
    </div>
  );
};

export default Welcome;
