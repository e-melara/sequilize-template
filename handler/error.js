const handler = (err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    const { details } = err.error;
    const messages = details.map(({  message, context }) =>{
      return {
        message,
        field: context.key,
      }
    });
    res.status(400).json({
      type: err.type,
      message: messages,
    });
  } else {
    next(err);
  }
};

export default handler;