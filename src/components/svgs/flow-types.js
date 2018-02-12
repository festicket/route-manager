// @flow

// Note: 'hoverable' is a string instead of a boolean due to an issue with Styled Components
// https://github.com/styled-components/styled-components/issues/1198

export type logoFlowType = {
  color: 'white' | 'black' | 'primary',
  hoverable?: 'true',
  size: 'small' | 'big',
};

export type functionalFlowType = {
  color: 'white' | 'grey' | 'primary',
  hoverable?: 'true',
};

export type socialFlowType = {
  color: 'white' | 'black',
  hoverable?: 'true',
};

export type trustCompaniesFlowType = {
  color: 'white' | 'black',
  hoverable?: 'true',
};

export type paymentFlowType = {};
