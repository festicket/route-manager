import React from 'react';
import PropTypes from 'prop-types';

function ExampleComponent({ name }) {
  return React.createElement(
    'div',
    null,
    'Hi ',
    name,
    '.'
  );
}
ExampleComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export { ExampleComponent };
