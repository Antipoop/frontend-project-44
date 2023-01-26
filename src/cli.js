import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const si = () => {
  console.log(`Hello, ${name}!`);
};
export { si, name };
