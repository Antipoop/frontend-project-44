import rees from '../index.js';

const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};

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

const gameData = () => {
  const number = randnum(0, 25);
  const question = `${number}`;
  const answer = primer(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

const brainPrime = () => rees(gamerule, gameData);

export default brainPrime;
