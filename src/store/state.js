const token = localStorage.getItem("userData");
console.log(token);

export default {
  dogBreed: [],
  dogs: [],

  // signup authentication
  auth: {
    email: "",
    token: token || null,
    expiresIn: "",
    userId: "",
    refreshToken: "",
  },
};
