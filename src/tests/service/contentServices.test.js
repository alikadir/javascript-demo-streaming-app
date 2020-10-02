import * as constants from '../../constants/contentServiceConstant';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
describe('Content Service Test', () => {
  describe('Success Cases', () => {
    beforeAll(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    test('Get and Check Series', async () => {
      const series = await (
        await import('../../services/contentService')
      ).getSeries();

      expect.assertions(4);
      expect(series.length).toBeGreaterThan(0);
      expect(series.length).toBeLessThanOrEqual(
        constants.CONTENT_MAX_DISPLAY_COUNT
      );
      expect(
        series.filter(
          f =>
            f.programType !== constants.CONTENT_PROGRAM_TYPE_SERIES ||
            f.releaseYear < constants.CONTENT_MIN_RELEASE_YEAR
        )
      ).toEqual([]);
      expect(
        [...series].sort((a, b) => a.title.localeCompare(b.title))
      ).toEqual(series);
    });
    test('Get and Check Movie', async () => {
      const movies = await (
        await import('../../services/contentService')
      ).getMovies();

      expect.assertions(4);
      expect(movies.length).toBeGreaterThan(0);
      expect(movies.length).toBeLessThanOrEqual(
        constants.CONTENT_MAX_DISPLAY_COUNT
      );
      expect(
        movies.filter(
          f =>
            f.programType !== constants.CONTENT_PROGRAM_TYPE_MOVIES ||
            f.releaseYear < constants.CONTENT_MIN_RELEASE_YEAR
        )
      ).toEqual([]);
      expect(
        [...movies].sort((a, b) => a.title.localeCompare(b.title))
      ).toEqual(movies);
    });
  });
  describe('Fail Cases', () => {
    beforeAll(() => {
      jest.resetModules();
      // for hide the console error message
      jest.spyOn(console, 'error').mockImplementation(() => {});
      jest.mock('../../constants/serviceConstant', () => ({
        BASE_ADDRESS: 'https://server-not-available.com',
      }));
    });
    afterAll(() => {
      jest.clearAllMocks();
    });

    test('Get Series', async done => {
      (await import('../../services/contentService'))
        .getSeries()
        .then(data => {
          done.fail('unexpected flow');
        })
        .catch(err => {
          done();
        });
    });
    test('Get Movies', async done => {
      (await import('../../services/contentService'))
        .getMovies()
        .then(data => {
          done.fail('unexpected flow');
        })
        .catch(err => {
          done();
        });
    });
  });
  describe('UnExpected Data Cases', () => {
    const mockServer = setupServer(
      rest.get(constants.CONTENT_API_URL, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, title: 'sample title1' },
            { id: 1, title: 'sample title1' },
          ])
        );
      })
    );
    beforeAll(() => {
      jest.resetModules();
      jest.clearAllMocks();

      mockServer.listen();
    });
    afterAll(() => mockServer.close());

    test('Get Series', async done => {
      (await import('../../services/contentService'))
        .getSeries()
        .then(data => {
          done.fail('unexpected flow');
        })
        .catch(err => {
          done();
        });
    });
    test('Get Movies', async done => {
      (await import('../../services/contentService'))
        .getMovies()
        .then(data => {
          done.fail('unexpected flow');
        })
        .catch(err => {
          done();
        });
    });
  });
});
