import { log } from '../../services/logService';

describe('Log Service Test', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Write Log', () => {
    // for hide the console group message
    jest.spyOn(console, 'group').mockImplementation(() => {});

    jest
      .spyOn(console, 'error')
      .mockImplementationOnce(args => {
        expect(args?.error?.message).toBe(customError.message);
      })
      .mockImplementation(() => {
        /* for hide the next console messages */
      });
    const customError = new Error('test error');
    log(customError);
  });
});
