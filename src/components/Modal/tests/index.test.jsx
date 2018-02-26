// @flow
import React from 'react';
import { mount } from 'enzyme';
import { Modal } from '@festicket/react-ui-components';
import toJson from 'enzyme-to-json';

describe('<Modal />', () => {
  test('should not render anything by default', () => {
    const tree = mount(
      <Modal isOpen={false} handleClose={() => {}}>
        <div>
          <h1>You cannot see this.</h1>
        </div>
      </Modal>,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('should render children when isOpen is true', () => {
    const tree = mount(
      <Modal isOpen handleClose={() => {}}>
        <div>
          <h1>You can seee this markup.</h1>
        </div>
      </Modal>,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
