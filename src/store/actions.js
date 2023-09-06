import axiosClient from "../axiosClient";
import axios from "axios";
import SignupValidations from "../services/SignupValidations";
//Signup
export async function Signup({ commit }, payload) {
  let postData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };
  // try and catch error
  let response = "";
  let errorMessage = "";
  try {
    response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCigxZ-CY6gw6gPtfN3ZW6BYx6KgnC-Iwc`,
      postData
    );
  } catch (err) {
    errorMessage = SignupValidations.errMessagesFromServer(
      err.response.data.error.errors[0].message
    );
    throw errorMessage;
  }
  console.log(errorMessage);

  if (response.status === 200) {
    commit("signUpAuth", {
      email: response.data.email,
      expiresIn: response.data.expiresIn,
      token: response.data.idToken,
      refreshToken: response.data.refreshToken,
      userId: response.data.localId,
    });
  }
  console.log(response);
}
//Login
export async function Login({ commit }, payload) {
  let postData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };

  // try and catch error
  let response = "";
  let errorMessage = "";
  try {
    response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCigxZ-CY6gw6gPtfN3ZW6BYx6KgnC-Iwc`,
      postData
    );
  } catch (err) {
    errorMessage = SignupValidations.errMessagesFromServer(
      err.response.data.error.errors[0].message
    );
    throw errorMessage;
  }
  console.log(errorMessage);

  if (response.status === 200) {
    commit("signUpAuth", {
      email: response.data.email,
      expiresIn: response.data.expiresIn,
      token: response.data.idToken,
      refreshToken: response.data.refreshToken,
      userId: response.data.localId,
    });
  }
  console.log(response);
}

// get all random dog breed on mounted
export function getRandomDogs({ commit }) {
  axiosClient.get(`breeds/image/random/50`).then(({ data }) => {
    console.log(data);
    commit("setRandomDogs", data.message);
  });
}
// get all dog breed on mounted
export function getAllDogBreed({ commit }) {
  axiosClient.get(`breeds/list/all`).then(({ data }) => {
    commit("setAllDogBreed", data.message);
  });
}
// search by breeds
export function filterByBreeds({ commit }, keyword) {
  axiosClient.get(`breed/${keyword}/images`).then(({ data }) => {
    console.log(keyword);
    commit("setFilteredByBreeds", data.message);
  });
}
