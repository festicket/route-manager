// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Popover } from '@festicket/react-ui-components';

describe('<Popover />', () => {
  test('with initial props', () => {
    const tree = mount(
      <Popover render={() => <div>Content</div>}>
        <button>Toggle</button>
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('with showInitially props', () => {
    const tree = mount(
      <Popover showInitially render={() => <div>Content</div>}>
        <button>Toggle</button>
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('it toggles a popover on click', () => {
    const TriggerButton = props => <button {...props}>Toggle</button>;

    const tree = mount(
      <Popover render={() => <div>Content</div>}>
        <TriggerButton />
      </Popover>,
    );

    const trigger = tree.find('TriggerButton');
    const popoverElement = tree.find('PopoverTransition').getDOMNode();

    expect(popoverElement.style.display).toBe('none');

    trigger.simulate('click');
    expect(popoverElement.style.display).toBe('inline-block');

    trigger.simulate('click');
    expect(popoverElement.style.display).toBe('none');
  });

  test('it updates ARIA attributes on popover show and hide', () => {
    const TriggerButton = props => <button {...props}>Toggle</button>;

    const tree = mount(
      <Popover render={() => <div>Content</div>}>
        <TriggerButton />
      </Popover>,
    );

    expect(tree.find('TriggerButton').prop('aria-haspopup')).toBe('true');
    expect(tree.find('TriggerButton').prop('aria-expanded')).toBe('false');

    tree.find('TriggerButton').simulate('click');

    expect(tree.find('TriggerButton').prop('aria-expanded')).toBe('true');

    tree.find('TriggerButton').simulate('click');
    expect(tree.find('TriggerButton').prop('aria-expanded')).toBe('false');
  });
});
