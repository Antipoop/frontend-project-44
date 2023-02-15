import { rees, yesOrNo } from '../index.js';

const even = (num) => num % 2 === 0;

const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';

const length = 100;

const gameData = () => yesOrNo(even, length);

const brainEven = () => rees(gamerule, gameData);

export default brainEven;
