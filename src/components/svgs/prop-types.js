// @flow
import PropTypes from 'prop-types';

export const LogoPropTypes = {
  color: PropTypes.oneOf(['white', 'black', 'primary']).isRequired,
  hoverable: PropTypes.oneOf(['true']),
  size: PropTypes.oneOf(['small', 'big']).isRequired,
};

export const FunctionalPropTypes = {
  color: PropTypes.oneOf(['white', 'grey', 'primary']).isRequired,
  hoverable: PropTypes.oneOf(['true']),
};

export const SocialPropTypes = {
  color: PropTypes.oneOf(['white', 'black', 'primary']).isRequired,
  hoverable: PropTypes.oneOf(['true']),
};

export const TrustCompaniesPropTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
  hoverable: PropTypes.oneOf(['true']),
};

export const PaymentTypePropTypes = {};
