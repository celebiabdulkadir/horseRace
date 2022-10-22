const getRandomNumber = (start = 1, end = 5) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export default getRandomNumber;