import { runEngine } from '../index.js';
import { yesOrNo } from '../utils.js';

const even = (num) => num % 2 === 0;

const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';

const length = 100;

const gameData = () => yesOrNo(even, length);

const brainEven = () => runEngine(gamerule, gameData);

export default brainEven;
