// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import FrequentlyAskedQuestion from './';
import { Background } from '../../utils/storybook-helpers';

const question = 'How do I get to the venue?';
const answer =
  '<p>BY METRO: Feria de Madrid has its own station, on Line 8 of the city&apos;s metro. Canillas, on Line 4, is also within walking distance (around 2km).&nbsp;</p><p>BY BUS: Buses 112, 122 and 104 run close to the festival venue.</p>';

storiesOf('Components / FrequentlyAskedQuestion', module)
  .add('Single', () => (
    <Background.White>
      <FrequentlyAskedQuestion question={question} answer={answer} />
    </Background.White>
  ))
  .add('Multiple', () => (
    <Background.White>
      <FrequentlyAskedQuestion
        question={question}
        answer={answer}
        openInitially
      />
      <FrequentlyAskedQuestion question={question} answer={answer} />
      <FrequentlyAskedQuestion question={question} answer={answer} />
    </Background.White>
  ));
