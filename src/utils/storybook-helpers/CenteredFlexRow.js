// @flow

import React from 'react';
import styled from 'styled-components';

const CenteredFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default (storyFn: Function) => (
  <CenteredFlexRow>{storyFn()}</CenteredFlexRow>
);
