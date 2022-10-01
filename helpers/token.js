import jsonwebtoken from 'jsonwebtoken';

const generarToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

const generarId = (large = 36) => {
  return Math.random().toString(large).substring(2) +  Date.now().toString(large) ;
}

export {
  generarId,
  generarToken,
}