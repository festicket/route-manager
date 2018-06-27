# Route Manager

[![Build Status](https://semaphoreci.com/api/v1/festicketci/route-manager/branches/master/badge.svg)](https://semaphoreci.com/festicketci/route-manager)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This router utility generates all the different route configurations required by our stack (React Router, Express routing etc.) and URLs.

## API

### URL definitions

URL definitions are comprised of key/value pairs:

```js
// app/utils/route-config.js

import routing from '@festicket/route-manager';

export const { getUrl, getPattern, getAllPatterns } = routing({
  home: '/',
  search: '/search',
  foo: '/baz/:bar1/:bar2'
});
```

### getUrl

We can generate URLs by referring to them using the format `key`:

```js
import { getUrl } from 'app/utils/route-config';

// Generate a simple url with no route params

const homeUrl = getUrl('home');
// returns => '/'

// Generate a complex url with many route params

const complexUrl = getUrl('foo', { bar1: 'test-1', bar2: 'test-2' });
// returns => '/baz/test-1/test-2'

// Generate a url with a query

const searchUrl = getUrl('search', {}, { q: 'something' });
// returns => '/search?q=something'
```

### getPattern

We can generate URL patterns by referring to them by `key`:

```js
import { getPattern } from 'app/utils/route-config';

// Generate the home pattern

const homePattern = getPattern('home');
// returns => '/'

const complexPattern = getPattern('foo');
// returns /baz/:bar1/bar2
```

### getAllPatterns

We can get all patterns (useful for debugging) by calling `getAllPatterns`:

```js
import { getAllPatterns } from 'app/utils/route-config';

const patterns = getAllPatterns();
// returns => { home: '/', search: '/search', foo: '/baz/:bar1/:bar2' }
```

### getParams

We can get named params as an object by calling `getParams`:

```js
import { getParams } from 'app/utils/route-config';

const params = getParams('festivals/creamfields/2018/shop');
// returns => { festivalSeries: 'creamfields', festivalEdition: '2018' }
```
