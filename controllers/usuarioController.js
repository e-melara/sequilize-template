export const registerUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({
    message: "register user",
    body,
  });
};
