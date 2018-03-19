// @flow

// Note: 'hoverable' is a string instead of a boolean due to an issue with Styled Components
// https://github.com/styled-components/styled-components/issues/1198

export type LogoSVGProps = {|
  color: 'white' | 'black' | 'primary',
  hoverable?: 'true',
|};

export type FunctionalSVGProps = {|
  color: 'white' | 'grey' | 'primary',
  hoverable?: 'true',
|};

export type SocialSVGProps = {|
  color: 'white' | 'black',
  hoverable?: 'true',
|};

export type TrustCompaniesSVGProps = {|
  color: 'white' | 'black',
  hoverable?: 'true',
|};

export type PaymentSVGProps = {||};
