// @flow

import React from 'react';
import styled from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import { storiesOf } from '@storybook/react';
import ButtonRound from './';

// Icons
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import PinterestIcon from '../../icons/Pinterest';
import LinkedInIcon from '../../icons/LinkedIn';
import TwitterIcon from '../../icons/Twitter';

const Box = styled.div`
  padding: 30px;
  box-sizing: border-box;
  background: ${switchProp('variant', {
    dark: prop('theme.colors.brand.primary'),
    default: prop('theme.colors.white'),
  })};
`;

storiesOf('Components / Buttons / ButtonRound', module)
  .add('Standard', () => <ButtonRound />)
  .add('Colour Variations', () => (
    <div>
      Light Background (brand - with icon inside):
      <Box>
        <ButtonRound href="https://www.instagram.com/festicket/">
          <InstagramIcon />
        </ButtonRound>
        <ButtonRound href="https://www.facebook.com/festicket">
          <FacebookIcon />
        </ButtonRound>
        <ButtonRound href="https://www.pinterest.com/festicket/">
          <PinterestIcon />
        </ButtonRound>
        <ButtonRound href="https://www.linkedin.com/company/festicket">
          <LinkedInIcon />
        </ButtonRound>
        <ButtonRound href="https://twitter.com/festicket">
          <TwitterIcon />
        </ButtonRound>
      </Box>
      Light Background (grey - with icon inside):
      <Box>
        <ButtonRound variant="grey" href="https://www.instagram.com/festicket/">
          <InstagramIcon />
        </ButtonRound>
        <ButtonRound variant="grey" href="https://www.facebook.com/festicket">
          <FacebookIcon />
        </ButtonRound>
        <ButtonRound variant="grey" href="https://www.pinterest.com/festicket/">
          <PinterestIcon />
        </ButtonRound>
        <ButtonRound
          variant="grey"
          href="https://www.linkedin.com/company/festicket"
        >
          <LinkedInIcon />
        </ButtonRound>
        <ButtonRound variant="grey" href="https://twitter.com/festicket">
          <TwitterIcon />
        </ButtonRound>
      </Box>
      Dark Background (with icon inside):
      <Box variant="dark">
        <ButtonRound
          variant="light"
          href="https://www.instagram.com/festicket/"
        >
          <InstagramIcon />
        </ButtonRound>
        <ButtonRound variant="light" href="https://www.facebook.com/festicket">
          <FacebookIcon />
        </ButtonRound>
        <ButtonRound
          variant="light"
          href="https://www.pinterest.com/festicket/"
        >
          <PinterestIcon />
        </ButtonRound>
        <ButtonRound
          variant="light"
          href="https://www.linkedin.com/company/festicket"
        >
          <LinkedInIcon />
        </ButtonRound>
        <ButtonRound variant="light" href="https://twitter.com/festicket">
          <TwitterIcon />
        </ButtonRound>
      </Box>
    </div>
  ));
