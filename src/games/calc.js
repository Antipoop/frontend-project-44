import { rees, randnum } from '../index.js';

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
