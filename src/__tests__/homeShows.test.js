import homeShows, { shows } from '../helper/homeShows';

test('Function Shows without extra data', () => {
  const returnSelf = x => x;
  const resultedNoData = {};
  shows.forEach(element => {
    resultedNoData[element] = element;
  });
  const result = homeShows(returnSelf);
  expect(result).toMatchObject(resultedNoData);
});

test('Function Shows with data', () => {
  const returnSelf = x => x;
  const resultedNoData = {};
  const myShows = ['The Avengers', 'Ant-man'];
  myShows.forEach(element => {
    resultedNoData[element] = element;
  });
  const result = homeShows(returnSelf, myShows);
  expect(result).toMatchObject(resultedNoData);
});
