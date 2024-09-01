/* eslint-disable no-unused-vars */
import axios from "axios";
import { BASE_URL } from "./helper";

export async function LoginApi(data) {
  try {
    const url = `${BASE_URL}/api/user/login`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterApi(data) {
  try {
    const url = `${BASE_URL}/api/user/register`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}
