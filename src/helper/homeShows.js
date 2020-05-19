import showData from './showData';

const shows = ['How I Met Your Mother', 'Donnie Darko', 'The 100', 'The Big Bang Theory', 'Dark', 'Brooklyn nine-nine', '100 humans', 'Money heist', 'Roma', 'the boy who harnessed'];

const homeShows = () => {
  const showList = {};
  shows.forEach(show => {
    showList[show] = showData(show);
  });
  console.log(showList);
};

export default homeShows;
