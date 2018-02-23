// @flow

import * as React from 'react';

import { PopoverTransition, PopoverContent } from './styles';

type Props = {
  children: React.Element<any>,
  horizontalAlign?: 'left' | 'right',
  /*
  The render method exposes a close function, allowing individual popovers
  to programmatically close themselves once open.
  */
  render: (close: () => void) => React.Node,
  showInitially?: boolean,
};

type State = {
  shown: boolean,
  positioning: {
    /*
    These properties are applied to the style attribute of the popover
    content in order to make it appear connected to the trigger
    with `position: absolute`.
    */
    top?: number,
    left?: number,
    right?: number,
  },
};

const ESC_KEY = 27;

export default class Popover extends React.Component<Props, State> {
  constructor(props: Props) {
    super();

    this.state = {
      shown: props.showInitially || false,
      positioning: {},
    };
  }

  componentDidMount() {
    this.calculatePositioning();
    document.addEventListener('click', this.handleClickOutside, false);
    document.addEventListener('keydown', this.handleEscapePress, false);
    window.addEventListener('resize', this.calculatePositioning, false);
  }

  componentWillUpdate(nextProps: {}, nextState: {}) {
    /*
    Only recalculate the absolute positioning of the popover content
    if it is not currently shown and is about to be.
    */
    if (!this.state.shown && nextState.shown) {
      this.calculatePositioning();
    }
  }

  componentWillUnmount() {
    /*
    All event listeners attached to the `document` or `window` on mount must
    be removed on unmount in order to prevent them hanging around.
    */
    document.removeEventListener('click', this.handleClickOutside, false);
    document.removeEventListener('keydown', this.handleEscapePress, false);
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
        /*
        Always position the popover content directly below
        the trigger element.
        */
        positioning.top = rect.bottom;

        /*
        Set the right or left CSS property of the popover content
        to the left `boundingClientRect` of the trigger element.

        https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        */
        if (this.props.horizontalAlign === 'right') {
          positioning.right = rect.left;
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

    /*
    When the Popover component is mounted, an onClick event listener is
    added to the document. Now, whenver a click happens anywhere on the
    document, this method determines whether or not the click happened
    'outside' of the trigger or the popover content, and if it did, closes it.
    */
    if (
      this.state.shown &&
      this.contentRef &&
      target instanceof Node && // Needed for `.contains` below to work with Flow
      !this.triggerRef.contains(target) &&
      !this.contentRef.contains(target)
    ) {
      this.closePopover();
    }
  };

  addTriggerToChild(children: React.Node) {
    const child = React.Children.only(children);

    /*
    Add the following props to the trigger element;
    * onClick
      - Sets an onClick event handler to toggle showing/hiding the popover.
    * ref
      - Sets a ref of the trigger's HTML element so that we can calculate
        the position of the popover to appear connected to it.
    * aria-haspopup
      - For accessibility, indicates that the trigger has a related
        div that will 'popup'. The trigger should have an `id` prop which will
        be used by the content `div` element to associate the elements together.
    * aria-expanded
      - For accessibility, indicates whether the popover is open or not.
    */
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

  handleEscapePress = (event: Event) => {
    if (event.keyCode === ESC_KEY && this.state.shown) {
      this.closePopover();
    }
  };

  render() {
    const { children, render } = this.props;
    const trigger = this.addTriggerToChild(children);

    /*
    TODO: Refactor wrapping div element to React.Fragment when all apps
    are upgraded to v16.2.
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
