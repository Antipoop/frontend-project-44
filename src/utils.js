export const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};

export const yesOrNo = (game, length) => {
  const number = randnum(1, length);
  const question = `${number}`;
  const answer = game(number) ? 'yes' : 'no';
  return [question, String(answer)];
};
