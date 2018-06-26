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

  const getParams = function(path: string): Object {
    const pattern = Object.keys(config).find(patternKey =>
      pathToRegexp(config[patternKey]).exec(path),
    );

    if (!pattern) {
      return {};
    }

    const paramKeys = [];
    const paramsArray = pathToRegexp(config[pattern], paramKeys).exec(path);
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
