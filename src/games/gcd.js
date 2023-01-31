import { rees, randnum } from '../index.js';

const gamerule = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num1 = randnum(1, 100);
  const num2 = randnum(1, 100);
  const quest = `${num1} ${num2}`;
  let answer = 0;
  for (let i = 1; i <= Math.min(num1, num2); i += 1) {
    if (Math.min(num1, num2) % i === 0) {
      if (Math.max(num1, num2) % i === 0) {
        answer = i;
      }
    }
  }
  return [quest, String(answer)];
};

const brainGcd = () => rees(gamerule, gameData);

export default brainGcd;
