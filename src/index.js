import readlineSync from 'readline-sync';
import { si, name } from './cli.js';

const rounds = 3;

const rees = (gamerule, gameData) => {
  si();
  console.log(gamerule);
  for (let i = 0; i < rounds; i += 1) {
    const [quest, answer] = gameData();
    console.log(`Question: ${quest}`);
    const result = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${result}', is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default rees;
