const randomCHar = () => {
  const str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
  return Math.floor(Math.random() * str.length);
};

export default randomCHar;
