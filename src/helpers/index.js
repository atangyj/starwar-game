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

export const autoSelect = (options) => {
  return options[0];
};

export const calculateLostScores = (player, computer, competeWith) => {
  const calculatePower = (value) => {
    if (isNaN(value)) {
      return 0;
    }
    return Math.floor(Math.log10(parseInt(value)));
  };
  const playerAttackPower = calculatePower(player[competeWith]);
  const computerAttackPower = calculatePower(computer[competeWith]);

  let lostScoreOfPlayer = 0,
    lostScoreOfComputer = 0;
  if (playerAttackPower > computerAttackPower) {
    lostScoreOfComputer = -computerAttackPower * 3;
  } else if (playerAttackPower < computerAttackPower) {
    lostScoreOfPlayer = -playerAttackPower * 3;
  }
  return [lostScoreOfPlayer, lostScoreOfComputer];
};
