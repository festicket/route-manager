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
  positioning: {
    position: 'absolute' | 'relative' | 'fixed',
    top?: number,
    left?: number,
    right?: number,
  },
};

const ESC_KEY = 27;

export default class Popover extends React.Component<Props, State> {
  state = {
    shown: false,
    positioning: {
      position: 'absolute',
    },
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
    document.addEventListener('keydown', this.escapePressed, false);
    window.addEventListener('resize', this.calculatePositioning, false);
  }

  componentWillUpdate(nextProps: {}, nextState: {}) {
    if (!this.state.shown && nextState.shown) {
      this.calculatePositioning();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
    document.removeEventListener('keydown', this.escapePressed, false);
    window.removeEventListener('resize', this.calculatePositioning, false);
  }

  setContentRef = (node: HTMLElement) => {
    this.contentRef = node;
  };

  setTriggerRef = (node: HTMLElement) => {
    this.triggerRef = node;
  };

  calculatePositioning = () => {
    if (this.triggerRef) {
      this.setState(state => {
        const positioning = { ...state.positioning };
        const rect = this.triggerRef.getBoundingClientRect();
        positioning.top = rect.bottom;

        if (this.props.horizontalAlign === 'right') {
          positioning.right = rect.right - rect.width;
        } else {
          positioning.left = rect.left;
        }

        return { positioning };
      });
    }
  };

  triggerRef: HTMLElement;

  contentRef: HTMLElement;

  handleClickOutside = (event: Event) => {
    const { target } = event;

    if (
      this.state.shown &&
      this.contentRef &&
      target instanceof Node && // Needed for .contains below to work with Flow
      !this.triggerRef.contains(target) &&
      !this.contentRef.contains(target)
    ) {
      this.closePopover();
    }
  };

  addTriggerToChild(children: React.Node) {
    const child = React.Children.only(children);

    return React.cloneElement(child, {
      onClick: this.togglePopover,
      ref: this.setTriggerRef,
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

    /*
    TODO: Refactor wrapping div element to React.Fragment when all apps
    are upgraded to v16.2
    */
    return (
      <div>
        {trigger}
        <PopoverTransition
          shown={this.state.shown}
          style={this.state.positioning}
        >
          <PopoverContent
            innerRef={this.setContentRef}
            aria-labelledby={trigger.props.id}
          >
            {render(this.closePopover)}
          </PopoverContent>
        </PopoverTransition>
      </div>
    );
  }
}
