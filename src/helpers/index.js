export const generateRandomNum = (range) => {
  return Math.floor(Math.random() * range);
};

export const randomSample = (data) => {
  const randomNum = generateRandomNum(data.length);
  return data[randomNum];
};

export const randomSampleWithoutReplacement = (sampleTimes, data) => {
  const sampledItems = [];
  while (sampleTimes > 0) {
    const randomNum = generateRandomNum(data.length);
    sampledItems.push(data.splice(randomNum, 1)[0]);
    sampleTimes -= 1;
  }
  return sampledItems;
};

export const autoSelect = (options) => {
  // options were randomly selected
  const randomNum = generateRandomNum(options.length);
  return options[randomNum];
};

export const calculateLostScores = (player, computer, competeWith) => {
  const calculatePower = (value) => {
    if (Array.isArray(value)) {
      return value.length;
    }

    if (isNaN(value)) {
      return 0;
    }

    if (value === 0) {
      return value;
    }
    // The range of attribute value is very large so using log2 value
    const result = Math.floor(Math.log2(parseInt(value)));
    console.log(value, result);
    return result;
  };
  const playerAttackPower = calculatePower(player[competeWith]);
  const computerAttackPower = calculatePower(computer[competeWith]);
  console.log(
    player,
    computer,
    competeWith,
    playerAttackPower,
    computerAttackPower
  );

  let lostScoreOfPlayer = 0,
    lostScoreOfComputer = 0;
  if (playerAttackPower > computerAttackPower) {
    lostScoreOfComputer = -computerAttackPower * 3;
  } else if (playerAttackPower < computerAttackPower) {
    lostScoreOfPlayer = -playerAttackPower * 3;
  }
  return [lostScoreOfPlayer, lostScoreOfComputer];
};
