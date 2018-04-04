// @flow

import pathToRegexp from 'path-to-regexp';

export default function routing(config: { [string]: string }) {
  const paths = {};
  Object.keys(config).forEach(key => {
    paths[key] = pathToRegexp.compile(config[key]);
  });

  const getUrl = function(key: string, params?: { [string]: string }) {
    return paths[key](params);
  };
  const getPath = function() {};

  const getAllPatterns = function() {};

  return {
    getUrl,
    getPath,
    getAllPatterns,
  };
}
