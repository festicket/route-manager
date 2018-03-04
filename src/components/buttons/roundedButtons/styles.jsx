// @flow
import styled from 'styled-components';
import ButtonPrimitive from 'src/components/buttons/ButtonPrimitive';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(ButtonPrimitive)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
`;

export { FlexWrapper, Button };
