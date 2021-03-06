// @flow

import routing from './';

const config = {
  home: '/',
  search: '/search',
  justParams: '/:param1/:param2',
  staticValue: '/complex/staticvalue/:param2',
  complex: '/complex/:param1/:param2',
};

const {
  getPattern,
  getUrl,
  getAllPatterns,
  getParams,
  getPatternFromUrl,
} = routing(config);

describe('getUrl function', () => {
  test('getUrl with no route params', () => {
    expect(getUrl('home')).toBe('/');
  });
  test('getUrl with route params', () => {
    expect(getUrl('complex', { param1: 'test-1', param2: 'test-2' })).toBe(
      '/complex/test-1/test-2'
    );
  });
  test('getUrl with a query', () => {
    expect(getUrl('search', {}, { q: 'something' })).toBe(
      '/search?q=something'
    );
  });
  test('getUrl with multiple queries', () => {
    expect(getUrl('search', {}, { q: 'something', foo: 'bar' })).toBe(
      '/search?foo=bar&q=something'
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
  test('getPattern should not return a leading slash if a relative pattern is required', () => {
    expect(getPattern('complex', true)).toBe('complex/:param1/:param2');
  });
});

describe('getAllPatterns function', () => {
  test('getPattern returns config object', () => {
    expect(getAllPatterns()).toEqual(config);
  });
  test('getPattern should not return a leading slash if a relative pattern is required', () => {
    expect(getAllPatterns(true)).toEqual({
      home: '/',
      search: 'search',
      justParams: ':param1/:param2',
      staticValue: 'complex/staticvalue/:param2',
      complex: 'complex/:param1/:param2',
    });
  });
});

describe('getParams function', () => {
  test('should return an object with the correct params when there are only named params', () => {
    expect(getParams('/value1/value2')).toEqual({
      param1: 'value1',
      param2: 'value2',
    });
  });

  test('should return an object with the correct params when there are named and unnamed params', () => {
    expect(getParams('/complex/value1/value2')).toEqual({
      param1: 'value1',
      param2: 'value2',
    });
  });

  test('should return an empty object when there are no named params', () => {
    expect(getParams('/search')).toEqual({});
  });
});

describe('getPatternFromUrl', () => {
  test('should return the correct url patterns based on the path', () => {
    expect(getPatternFromUrl('/complex/staticvalue/param2')).toEqual(
      '/complex/staticvalue/:param2'
    );
    expect(getPatternFromUrl('/complex/somerandomvalue/param2')).toEqual(
      '/complex/:param1/:param2'
    );
  });

  test('should return empty string if there is no matching pattern', () => {
    expect(getPatternFromUrl('/random1/random2/random3')).toEqual('');
  });
});
