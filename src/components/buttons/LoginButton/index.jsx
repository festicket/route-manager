// @flow

// Lib
// -------------
import React, { type Node } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

// Components
// -------------

// Styles
// -------------
// import { Wrapper } from './styles';

// Flow Types
// -------------
type Props = {
  children: Node,
  handleClick: () => mixed,
};

function LoginButtonComponent({ className, children, handleClick, ...props }) {
  return (
    <button
      data-test-id="login-right-panel-trigger"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

const StyledLoginButtonComponent = styled(LoginButtonComponent)`
  background-color: ${prop('theme.colors.brand.primary')};
  border: 0;
  color: ${prop('theme.colors.white')};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${prop('theme.fontWeight.bold')};
  height: 76px;
  line-height: 1;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 30px 0;
  width: 150px;
  border-radius: 0;
`;

export default function LoginButton(props: Props) {
  return <StyledLoginButtonComponent {...props} />;
}
