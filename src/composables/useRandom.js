const getRandomNumber = (start = 0.03, end = 0.05) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

export default getRandomNumber;
