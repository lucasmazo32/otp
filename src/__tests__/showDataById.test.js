import showDataByID from '../helper/showDataById';

test('Function show data', () => {
  const result = showDataByID('tt2467372');
  result.then(result => expect(result).toBeCalledWith(expect.objectContaining({
    Title: 'Modern Family',
  })));
});
