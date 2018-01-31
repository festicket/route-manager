import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import Separator from './';

const Box = styled.div`
  padding: 50px;
  box-sizing: border-box;
  background: ${switchProp('variant', {
    dark: prop('theme.colors.brand.primary'),
    default: prop('theme.colors.white'),
  })};
`;

storiesOf('Components / Separator', module)
  .add('Light Separator', () => (
    <Box variant="dark">
      <Separator variant="light" />
      <Separator variant="light">
        <span style={{ color: 'white' }}>or</span>
      </Separator>
      <Separator variant="light">
        <span style={{ color: 'white' }}>
          lorem ipsum dolor sit amet nullisque qua suntam
        </span>
      </Separator>
    </Box>
  ))
  .add('Medium Separator', () => (
    <Box>
      <Separator />
      <Separator>or</Separator>
      <Separator>lorem ipsum dolor sit amet nullisque qua suntam</Separator>
    </Box>
  ))
  .add('Dark Separator', () => (
    <Box>
      <Separator variant="dark" />
      <Separator variant="dark">or</Separator>
      <Separator variant="dark">
        lorem ipsum dolor sit amet nullisque qua suntam
      </Separator>
    </Box>
  ))
  .add('Margin large variant', () => (
    <Box>
      <Separator variant="dark" marginLarge />
    </Box>
  ));
