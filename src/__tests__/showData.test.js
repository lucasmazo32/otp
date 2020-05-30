import showData from '../helper/showData';

test('Function show data', () => {
  const result = showData('modern family');
  result.then(result => expect(result).toBeCalledWith(expect.objectContaining({
    Title: 'Modern Family',
  })));
});
