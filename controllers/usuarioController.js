export const registerUser = async (req, res) => {
  const body = req.body;
  res.json({
    message: "register user",
    body,
  });
};
