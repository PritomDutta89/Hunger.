import axios from "axios";

export async function getFoodList() {
  try {
    const url = `http://localhost:4000/api/food/list`;
    const res = await axios.get(url);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function addToCartApi(itemId, token) {
  try {
    const url = `http://localhost:4000/api/cart/add`;
    const res = await axios.post(url, { itemId }, { headers: { token } });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function removeCartApi(itemId, token) {
  try {
    const url = `http://localhost:4000/api/cart/remove`;
    const res = await axios.post(url, { itemId }, { headers: { token } });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartDataApi(token) {
  try {
    const url = `http://localhost:4000/api/cart/get`;
    const res = await axios.post(url, {}, { headers: { token } });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function placeOrderApi(orderData, token) {
  try {
    const url = `http://localhost:4000/api/order/place`;
    const res = await axios.post(url, orderData, { headers: { token } });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function verifyOrderApi(success, orderId) {
  try {
    const url = `http://localhost:4000/api/order/verify`;
    const res = await axios.post(url, {success, orderId});

    return res;
  } catch (error) {
    console.log(error);
  }
}
