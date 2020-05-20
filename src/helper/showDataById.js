const showDataByID = async id => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=da6bdfda&i=${id}`, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export default showDataByID;
