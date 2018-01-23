import { configure } from '@storybook/react';
import requireContext from 'require-context';

const req = requireContext('../src/', true, /story.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
