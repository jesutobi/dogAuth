// signup auth payload
export function signUpAuth(state, data) {
  // console.log(data);
  state.auth.email = data.email;
  state.auth.token = data.token;
  state.auth.expiresIn = data.expiresIn;
  state.auth.userId = data.userId;
  state.auth.refreshToken = data.refreshToken;
}
// export function loginAuth (state, data) {
//   // console.log(data);
//   state.auth.email = data.email;
//   state.auth.token = data.token;
//   state.auth.expiresIn = data.expiresIn;
//   state.auth.userId = data.userId;
//   state.auth.refreshToken = data.refreshToken;
// }

// set random dogs
export function setRandomDogs(state, data) {
  // console.log(data);
  state.dogs = data;
}
// set all dogs
export function setAllDogBreed(state, data) {
  // console.log(data);
  state.dogBreed = data;
}
// set filtered by breeds
export function setFilteredByBreeds(state, data) {
  // console.log(data);
  state.dogs = data;
}
