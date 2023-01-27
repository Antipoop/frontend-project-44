import rees from '../index.js';

const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};

const gamerule = 'What is the result of the expression?';

const gameData = () => {
  const num1 = randnum(1, 100);
  const num2 = randnum(1, 100);
  const operation = randnum(1, 3);
  let quest = '';
  let answer = 0;
  switch (operation) {
    case 1:
      quest = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      quest = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 3:
      quest = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
      break;
  }
  return [quest, String(answer)];
};

const brainCalc = () => rees(gamerule, gameData);

export default brainCalc;
