import { configure, setAddon, getStorybook } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';

// Init percy io
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

// reguire in all of our story.jsx files
const req = require.context('../src/', true, /story\.jsx$/);
configure(() => req.keys().forEach(req), module);

serializeStories(getStorybook);
