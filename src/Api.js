import axios from "axios";
const BASE = "https://something-22.herokuapp.com/api";

// this is an example for an api call with axios

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/register`, {
      username: username,
      password: password
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/login`, {
      username: username,
      password: password
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserCharacters() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function saveCharacter(id, string) {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
