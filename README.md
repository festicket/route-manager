# Festicket Route Manager

This router utility generates all the different route configurations required by our stack (React Router, Express routing etc.) and URLs.

## API

### URL definitions

Url definitions are comprised of key/value pairs:

```js
// app/utils/route-config.js

import routing from '@festicket/route-manager';

export const { getUrl, getPath, getAllPatterns } = routing({
  home: '/',
  search: '/search',
  foo: '/baz`/:bar1/:bar2',
});
```

### getUrl

 We can generate URLs by referring to them using the format `key`:

 ```js
import { getUrl } from 'app/utils/route-config'

// Generate a simple url with no route params

const homeUrl = getUrl('home');
// returns => '/'

// Generate a complex url with many route params

const complexUrl = getUrl('foo', { bar1: 'test-1', bar2: 'test-2' });
// returns => '/baz/test-1/test-2'

// Generate a url with a query

const searchUrl = getUrl('search', {}, {q: 'something'});
// returns => '/search?q=something'

 ```


### getPattern

We can generate url Patterns by referring to them by `key`:


```js
import { getPattern } from 'app/utils/route-config'

// Generate the home pattern

const homePattern = getPattern('home');
// returns => '/'

const complexPattern = getPattern('foo');
// returns /baz/:bar1/bar2

```

### getPatterns

We can get all patterns (usefull for debugging) by calling `getAllPatterns`:

```js
import { getAllPattern } from 'app/utils/route-config'

const patterns = getAllPatterns();

// reutrns => { home: '/', search: '/search', foo: '/baz/:bar1/:bar2' }

```

---
[![Build Status](https://semaphoreci.com/api/v1/festicketci/route-manager/branches/master/badge.svg)](https://semaphoreci.com/festicketci/route-manager)