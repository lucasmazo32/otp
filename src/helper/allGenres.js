const allGenres = (showList, addOption) => {
  const genres = [];
  Object.keys(showList).forEach(show => {
    showList[show].then(result => {
      result.Genre.split(', ').forEach(genre => {
        if (!genres.includes(genre)) {
          genres.push(genre);
          addOption(genre);
        }
      });
    });
  });
  return genres;
};

export default allGenres;
