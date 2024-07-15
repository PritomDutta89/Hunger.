/* eslint-disable no-unused-vars */
import axios from "axios";

export async function LoginApi(data) {
  try {
    const url = `http://localhost:4000/api/user/login`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterApi(data) {
  try {
    const url = `http://localhost:4000/api/user/register`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}
