import { runEngine } from '../index.js';
import { yesOrNo } from '../utils.js';

const primer = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamerule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const length = 25;

const gameData = () => yesOrNo(primer, length);

const brainPrime = () => runEngine(gamerule, gameData);

export default brainPrime;
