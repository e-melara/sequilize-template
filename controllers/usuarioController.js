export const registerUser = async (req, res, { models }) => {
  const body = req.body;
  res.json({
    message: "register user",
    body,
  });
};
