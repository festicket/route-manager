import React from 'react';

function ExampleComponent({ name }) {
  return React.createElement(
    'div',
    null,
    'Hi ',
    name,
    '.'
  );
}

export { ExampleComponent };
