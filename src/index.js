// @flow

import pathToRegexp from 'path-to-regexp';
import qs from 'query-string';

type Config = { [string]: string };

export default function routing(config: Config) {
  const paths = {};
  Object.keys(config).forEach(key => {
    paths[key] = pathToRegexp.compile(config[key]);
  });

  const getUrl = function(
    key: string,
    params?: { [string]: string },
    queryStrings?: { [string]: mixed },
  ): string {
    const path = paths[key](params);
    if (queryStrings) {
      return `${path}?${qs.stringify(queryStrings)}`;
    }
    return path;
  };

  const getPattern = function(key: string): string {
    return config[key];
  };

  const getAllPatterns = function(): Config {
    return config;
  };

  const getParams = function(path: string, pattern: string): Object {
    const paramKeys = [];
    // the second argument should be an empty array to be filled with keys for parameters
    const patternRegex = pathToRegexp(pattern, paramKeys);
    const paramsArray = patternRegex.exec(path);
    return paramKeys.reduce(
      (params, currentParam, index) => ({
        ...params,
        // the first paramsArray item is the path, so start at index = 1
        [currentParam.name]: paramsArray[index + 1],
      }),
      {},
    );
  };

  return {
    getUrl,
    getPattern,
    getAllPatterns,
    getParams,
  };
}
