import apiKey from './apiKey';

const changeToWeb = name => name.replace(/\s/g, '+');

const showData = async name => {
  const webName = changeToWeb(name);
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${webName}`, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export default showData;
