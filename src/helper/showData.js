const changeToWeb = name => name.replace(/\s/g, '+');

const showData = async name => {
  const webName = changeToWeb(name);
  const response = await fetch(`http://www.omdbapi.com/?apikey=da6bdfda&t=${webName}`, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  console.log(data);
};

export default showData;