// @flow

import routing from './';

const config = {
  home: '/',
  search: '/search',
  complex: '/complex/:param1/:param2',
};

const { getPattern, getUrl, getAllPatterns } = routing(config);

describe('getUrl function', () => {
  test('getUrl with no route params', () => {
    expect(getUrl('home')).toBe('/');
  });
  test('getUrl with route params', () => {
    expect(getUrl('complex', { param1: 'test-1', param2: 'test-2' })).toBe(
      '/complex/test-1/test-2',
    );
  });
  test('getUrl with a query', () => {
    expect(getUrl('search', {}, { q: 'something' })).toBe(
      '/search?q=something',
    );
  });
  test('getUrl with multiple queries', () => {
    expect(getUrl('search', {}, { q: 'something', foo: 'bar' })).toBe(
      '/search?foo=bar&q=something',
    );
  });
});

describe('getPattern function', () => {
  test('getPattern for simple url', () => {
    expect(getPattern('home')).toBe('/');
  });
  test('getPattern for url with params', () => {
    expect(getPattern('complex')).toBe('/complex/:param1/:param2');
  });
});

describe('getAllPatterns function', () => {
  test('getPattern returns config object', () => {
    expect(getAllPatterns()).toBe(config);
  });
});
