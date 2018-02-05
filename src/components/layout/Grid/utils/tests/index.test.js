// @flow

import transformWidthNumber from '../transformWidthNumber';

describe('transformWidthNumber', () => {
  it('should return a passed integer higher than 1', () => {
    const output = transformWidthNumber(5);
    expect(output).toEqual('5px');
  });

  it('should transform a fraction to a percentage', () => {
    const output = transformWidthNumber(1 / 2);
    expect(output).toEqual('50%');
  });
});
