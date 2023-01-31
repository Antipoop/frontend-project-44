import { rees, randnum } from '../index.js';

const gamerule = 'What number is missing in the progression?';

const getProgression = (firstItem, length, diff) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = firstItem + diff * i;
    progression.push(item);
  }
  return progression;
};

const gameData = () => {
  const lenghtProgression = randnum(5, 10);
  const startItem = randnum(0, 100);
  const diffprogression = randnum(1, 15);
  const hidden = randnum(0, lenghtProgression - 1);
  const progression = getProgression(startItem, lenghtProgression, diffprogression);
  const answer = progression[hidden];
  progression[hidden] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(answer)];
};

const brainProgression = () => rees(gamerule, gameData);

export default brainProgression;
