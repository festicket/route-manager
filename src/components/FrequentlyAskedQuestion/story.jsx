// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import FrequentlyAskedQuestion from './';
import { Background } from '../../utils/storybook-helpers';

storiesOf('Components / FrequentlyAskedQuestion', module)
  .add('Single', () => (
    <Background.White>
      <FrequentlyAskedQuestion title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
        sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
        facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
        comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.
      </FrequentlyAskedQuestion>
    </Background.White>
  ))
  .add('Multiple', () => (
    <Background.White>
      <FrequentlyAskedQuestion title="Lorem ipsum dolor sit amet" openInitially>
        Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
        sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
        facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
        comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
        sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
        facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
        comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, ius tempor labore te, eu postea scriptorem
        sit. Diceret saperet per ad, stet utroque quaerendum ius eu, eam zril
        facilisi eu. Offendit corrumpit at eum, qui verterem scriptorem
        comprehensam in. Ad eros erant dolores sit, ei cum liber fabellas.
      </FrequentlyAskedQuestion>
    </Background.White>
  ));
