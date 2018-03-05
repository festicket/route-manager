// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';
import Gutter from './';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum elit lorem, eleifend in augue sed, varius condimentum orci.
Duis dignissim auctor urna et finibus. Proin in dignissim ex.
Etiam feugiat quam a venenatis rhoncus. Nam euismod, sem et varius porttitor,
arcu tellus rutrum tortor, quis hendrerit leo velit at tellus. Donec tellus
accumsan at arcu et, ornare ullamcorper nisl. Nam sed diam vestibulum sapien
ultricies gravida vitae in dui. Donec posuere nibh vel ipsum hendrerit euismod.
Integer et orci eu quam mattis mattis. Nulla elementum lacus ullamcorper,
faucibus elit nec, imperdiet lorem. Nunc venenatis odio vitae enim commodo,
vitae lobortis lorem hendrerit. Curabitur consequat cursus venenatis.`;

storiesOf('Components / Layout / Gutter', module).add('default', () => (
  <div>
    <Background.Monospace>
      <p>Horizontal padding should change according to viewport width.</p>
    </Background.Monospace>
    <Gutter>{loremIpsum}</Gutter>
  </div>
));
