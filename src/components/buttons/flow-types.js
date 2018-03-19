// @flow

export type ButtonProps = {
  /** React Router `to` prop - like href */
  to?: string,
  /** Boolean indicating whether the button should have `width: 100%` */
  fullWidth?: boolean,
  /** String indicating the size of the button */
  size?: 'regular' | 'small' | 'inline',
  /** String indicating the variant of the button */
  variant?: 'regular' | 'bordered' | 'transparent',
  /** String indicating the HTML element the component should be */
  element?: 'a' | 'button',
  /** BUG: This prop has no effect on the component */
  fontSize?: 'regular' | 'small' | 'tiny',
  /** Boolean indicating whether the button should render as disabled */
  isDisabled?: boolean,
  /** The content of the button  - can be text or HTML */
  children?: React.Node,
  /**
   * TODO - remove - `children` can do everything this can do.
   * Will get used instead of `children` prop if it is passed in.
   */
  render?: () => mixed,
};
