const generarId = (large = 36) => {
  return Math.random().toString(large).substring(2) +  Date.now().toString(large) ;
}

export {
  generarId
}