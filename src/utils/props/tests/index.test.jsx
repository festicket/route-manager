// @flow

import { blacklistProps } from '../';

describe('blacklistProps', () => {
  test('should return an empty object', () => {
    const wrapper = blacklistProps({}, []);
    expect(wrapper).toEqual({});
  });

  test('should filter out a blacklisted prop', () => {
    const wrapper = blacklistProps({ one: 1 }, ['one']);
    expect(wrapper).toEqual({});
  });

  test('should not filter out a non-existent blacklisted prop', () => {
    const wrapper = blacklistProps({ one: 1 }, ['two']);
    expect(wrapper).toEqual({ one: 1 });
  });

  test('should filter out multiple blacklisted props', () => {
    const wrapper = blacklistProps({ one: 1, two: 2, three: 3, four: 4 }, [
      'two',
      'three',
    ]);
    expect(wrapper).toEqual({ one: 1, four: 4 });
  });
});
