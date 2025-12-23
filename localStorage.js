let users = [
  {
    email: "amira@intoblue.com",
    password: 123,
    gender: "female"
  },
  {
    email: "amir@intoblue.com",
    password: 321,
    gender: "male"
  }
];

localStorage.setItem("localUsers", JSON.stringify(users));
