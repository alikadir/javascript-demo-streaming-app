import '@testing-library/jest-dom/extend-expect';

global.beforeAll(() => {
  // that is Ant Design issue
  // https://github.com/ant-design/ant-design/issues/21096
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

global.afterAll(() => {
  jest.resetAllMocks();
});
