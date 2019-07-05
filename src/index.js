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
    queryStrings?: { [string]: mixed }
  ): string {
    const path = paths[key](params);
    if (queryStrings) {
      return `${path}?${qs.stringify(queryStrings)}`;
    }
    return path;
  };

  const getPattern = function(key: string, relative?: boolean): string {
    const pattern = config[key];
    if (relative && pattern.charAt(0) === '/' && pattern.length > 1) {
      return pattern.substring(1);
    }
    return pattern;
  };

  const getAllPatterns = function(relative?: boolean): Config {
    if (relative) {
      return Object.keys(config).reduce(
        (accumulator, current) => ({
          ...accumulator,
          [current]: getPattern(current, true),
        }),
        {}
      );
    }
    return config;
  };

  const getParams = function(path: string): Object {
    const pattern = Object.keys(config).find(patternKey =>
      pathToRegexp(config[patternKey]).exec(path)
    );

    if (!pattern) {
      return {};
    }

    const paramKeys = [];
    const paramsArray = pathToRegexp(config[pattern], paramKeys).exec(path);
    return paramKeys.reduce(
      (params, currentParam, index) => ({
        ...params,
        // the first paramsArray item is the path, so start at index === 1
        [currentParam.name]: paramsArray[index + 1],
      }),
      {}
    );
  };

  const getPatternFromUrl = function(path: string) {
    const key = Object.keys(config).find(patternKey =>
      pathToRegexp(config[patternKey]).exec(path)
    );
    if (key) {
      return config[key];
    }
    return '';
  };

  return {
    getUrl,
    getPattern,
    getAllPatterns,
    getParams,
    getPatternFromUrl,
  };
}
