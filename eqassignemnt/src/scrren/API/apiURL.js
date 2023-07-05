import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const registrationUser = async (
  firstName,
  lastName,
  mobileNumber,
  password
) => {
  const data = await axios.post(`${BASE_URL}/api`, {
    firstName,
    lastName,
    mobileNumber,
    password,
  });

  return data;
};

export const login = async (mobileNumber, password) => {
  const data = await axios.post(`${BASE_URL}/api/login`, {
    mobileNumber,
    password,
  });
  return data;
};

export const getDetail = async (mobileNumber) => {
  const data = await axios.get(`${BASE_URL}/name/mobile/${mobileNumber}`);
  return data;
};
