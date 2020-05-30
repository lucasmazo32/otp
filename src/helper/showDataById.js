import apikey from './apiKey';

const showDataByID = async id => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export default showDataByID;
