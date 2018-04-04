// @flow

import routing from '../';

const config = {
  home: '/',
  search: '/search',
  complex: '/complex/:param1/:param2',
};

const { getUrl } = routing(config);
// beforeEach(() => {
//   const { getUrl } = routing(config);
// });

describe('getUrl function', () => {
  // Applies only to tests in this describe block
  test('getUrl  with no route params', () => {
    expect(getUrl('home')).toBe('/');
  });
  test('getUrl with route params', () => {
    expect(getUrl('complex', { param1: 'test-1', param2: 'test-2' })).toBe(
      '/complex/test-1/test-2',
    );
  });
});
