const login = (req, res) => {
  res.render("auth/login", {
    title: "Login",
  });
};

export { login };
