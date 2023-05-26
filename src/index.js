import readlineSync from 'readline-sync';
import { randnum } from './utils.js';

const rounds = 3;

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const result = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${result}', is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const yesOrNo = (game, length) => {
  const number = randnum(1, length);
  const question = `${number}`;
  const answer = game(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

export { runEngine, yesOrNo };
