// @flow

import styled from 'styled-components';
import { darken, rgba } from 'polished';
import ButtonPrimitive from 'src/components/buttons/ButtonPrimitive';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

export const Button = styled(ButtonPrimitive)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 0;
  cursor: pointer;
  background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.05)};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.greyscale.black, 0.1)};
    color: ${({ theme }) => darken(0.05, theme.colors.greyscale.dark)};
  }
`;
