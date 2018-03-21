// @flow
import styled from 'styled-components';
import ButtonPrimitive from 'src/components/buttons/ButtonPrimitive';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonPrimitive = styled(ButtonPrimitive)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0; // remove padding from button so it will be a perfect circle
  cursor: pointer;
`;

export { FlexWrapper, StyledButtonPrimitive };
