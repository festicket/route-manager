// @flow

// Utils
export { default as breakpoint } from './utils/breakpoint';
export { default as spacing } from './utils/spacing';
export { default as theme } from './utils/theme';

// Components
export { Grid, GridElement } from './components/layout/Grid';
export { default as TextPrimitive } from './components/text/TextPrimitive';
export { default as PrimaryHeading } from './components/text/PrimaryHeading';
export {
  default as SecondaryHeading,
} from './components/text/SecondaryHeading';
export { default as TertiaryHeading } from './components/text/TertiaryHeading';
export { default as BodyText } from './components/text/BodyText';
export { default as Highlight } from './components/text/Highlight';
export { default as Hyperlink } from './components/text/Hyperlink';
export { default as Popover } from './components/Popover';
export {
  default as FrequentlyAskedQuestion,
} from './components/FrequentlyAskedQuestion';

export {
  default as WithVerticalSeparator,
} from './components/layout/WithVerticalSeparator';

// SVGs
export * from './components/svgs/generated/functional';
export * from './components/svgs/generated/logo';
export * from './components/svgs/generated/payment-types';
export * from './components/svgs/generated/social';
export * from './components/svgs/generated/trust-companies';
