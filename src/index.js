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
      console.log(`'${result}', is wrong answer ;(. Correct answer was '${answer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};

const yesOrNo = (game, length) => {
  const number = randnum(1, length);
  const question = `${number}`;
  const answer = game(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

export { rees, randnum, yesOrNo };
