export const generateRandomNum = (range) => {
  return Math.floor(Math.random() * range);
};

export const randomSample = (data) => {
  const randomNum = generateRandomNum(data.length);
  return data[randomNum];
};

export const randomSampleWithoutReplacement = (sampleTimes, data) => {
  const sampledItems = [];
  while (sampleTimes--) {
    const randomNum = generateRandomNum(data.length);
    sampledItems.push(data.splice(randomNum, 1)[0]);
  }
  return sampledItems;
};
