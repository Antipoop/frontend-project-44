import readlineSync from 'readline-sync';
import { si, name } from './cli.js';

console.log('Welcome to the Brain Game!');
si();
const even = () => {
  const max = 100;
  const min = 1;
  let i = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const num = Math.round(Math.random() * (max - min) + min);
    let answer = '';
    if (num % 2 !== 0) {
      answer = 'no';
    } else {
      answer = 'yes';
    }
    console.log('Question: ', num);
    const result = readlineSync.question('Your answer: ');
    if (result === answer && num % 2 === 0) {
      console.log('Correct!');
    } else if (result === answer && num % 2 !== 0) {
      console.log('Correct!');
    } else {
      return console.log(`'${result}', is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};

export default even;
