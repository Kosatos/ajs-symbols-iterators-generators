import ErrorRepository from '../js/ErrorRepository';

describe('Class ErrorRepository: ', () => {
  const errors = new ErrorRepository();

  test('\'translate\' should return the error text by code', () => {
    expect(errors.translate(111)).toEqual('Error 111');
    expect(errors.translate(555)).toEqual('Unknown error');
  });
});
