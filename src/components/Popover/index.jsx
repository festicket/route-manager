/* eslint-env browser */
// @flow

import * as React from 'react';

import { PopoverTransition, PopoverContent } from './styles';

type Props = {
  children: React.Element<any>,
  horizontalAlign?: 'left' | 'right',
  render: (close: () => void) => React.Node,
};

type State = {
  shown: boolean,
};

const ESC_KEY = 27;

export default class Popover extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      shown: false,
    };

    this.positioning = {
      position: 'absolute',
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
    document.addEventListener('keydown', this.escapePressed, false);

    if (this.childRef) {
      const rect = this.childRef.getBoundingClientRect();
      this.positioning.top = rect.bottom;

      if (this.props.horizontalAlign === 'right') {
        this.positioning.right = rect.right - rect.width;
      } else {
        this.positioning.left = rect.left;
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
    document.removeEventListener('keydown', this.escapePressed, false);
  }

  setContentRef(node: HTMLElement) {
    this.contentRef = node;
  }

  childRef: HTMLElement;

  contentRef: HTMLElement;

  positioning: {
    position: 'absolute' | 'relative' | 'fixed',
    top?: number,
    left?: number,
    right?: number,
  };

  handleClickOutside = (event: Event) => {
    const { target } = event;

    if (
      this.state.shown &&
      this.contentRef &&
      target instanceof Node &&
      !this.childRef.contains(target) &&
      !this.contentRef.contains(target)
    ) {
      this.closePopover();
    }
  };

  addTriggerToChild(children: React.Node) {
    const child = React.Children.only(children);

    return React.cloneElement(child, {
      onClick: () => this.togglePopover(),
      ref: node => {
        this.childRef = node;
      },
      'aria-haspopup': 'true',
      'aria-expanded': this.state.shown.toString(),
    });
  }

  togglePopover = () => {
    this.setState(state => ({ shown: !state.shown }));
  };

  closePopover = () => {
    this.setState(() => ({ shown: false }));
  };

  escapePressed = (event: Event) => {
    if (event.keyCode === ESC_KEY && this.state.shown) {
      this.closePopover();
    }
  };

  render() {
    const { children, render } = this.props;
    const trigger = this.addTriggerToChild(children);

    return (
      <div>
        {trigger}
        <PopoverTransition shown={this.state.shown} style={this.positioning}>
          <PopoverContent
            innerRef={node => {
              this.setContentRef(node);
            }}
            aria-labelledby={trigger.props.id}
          >
            {render(this.closePopover)}
          </PopoverContent>
        </PopoverTransition>
      </div>
    );
  }
}
