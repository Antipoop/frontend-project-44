import { rees, randnum } from '../index.js';

const even = (num) => num % 2 === 0;

const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const number = randnum(1, 100);
  const quest = `${number}`;
  const answer = even(number) ? 'yes' : 'no';
  return [quest, String(answer)];
};

const brainEven = () => rees(gamerule, gameData);

export default brainEven;
