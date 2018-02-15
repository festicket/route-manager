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

  test('it toggles a popover on click', () => {
    const tree = mount(
      <Popover render={() => <div>Content</div>}>
        <button>Toggle</button>
      </Popover>,
    );

    const trigger = tree.find('button');
    const popoverElement = tree
      .childAt(0)
      .childAt(1)
      .getDOMNode();

    expect(popoverElement.style.display).toBe('none');

    trigger.simulate('click');
    expect(popoverElement.style.display).toBe('inline-block');

    trigger.simulate('click');
    expect(popoverElement.style.display).toBe('none');
  });

  test('it updates ARIA attributes on popover show and hide', () => {
    const tree = mount(
      <Popover render={() => <div>Content</div>}>
        <button>Toggle</button>
      </Popover>,
    );

    const trigger = tree.find('button');

    expect(
      tree
        .childAt(0)
        .childAt(0)
        .prop('aria-haspopup'),
    ).toBe('true');

    expect(
      tree
        .childAt(0)
        .childAt(0)
        .prop('aria-expanded'),
    ).toBe('false');

    trigger.simulate('click');

    expect(
      tree
        .childAt(0)
        .childAt(0)
        .prop('aria-expanded'),
    ).toBe('true');

    trigger.simulate('click');
    expect(
      tree
        .childAt(0)
        .childAt(0)
        .prop('aria-expanded'),
    ).toBe('false');
  });
});
