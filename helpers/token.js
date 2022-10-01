const generarId = (large = 36) => {
  return Date.now().toString(large) + Math.random().toString(large).substring(2);
}

export {
  generarId
}