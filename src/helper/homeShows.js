const shows = ['How I Met Your Mother', 'Modern Family', 'The 100', 'The Big Bang Theory', 'Dark', 'Brooklyn nine-nine', '100 humans', 'Money heist', 'Roma', 'the boy who harnessed'];

const homeShows = (showFunc, array = shows) => {
  const showList = {};
  array.forEach(show => {
    showList[show] = showFunc(show);
  });
  return showList;
};

export default homeShows;
export { shows };
