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
    queryStrings?: { [string]: string },
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

  return {
    getUrl,
    getPattern,
    getAllPatterns,
  };
}
