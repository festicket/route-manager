// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import * as logoSvgComponents from './generated/logo';
import * as functionalSvgComponents from './generated/functional';
import * as paymentSvgComponents from './generated/payment-types';
import * as socialSvgComponents from './generated/social';
import * as trustCompaniesSvgComponents from './generated/trust-companies';

import { LOGO_BIG, LOGO_SMALL } from './styles/logo-size-styles';
import { Background } from '../../utils/storybook-helpers/index';

const WHITE = 'white';
const BLACK = 'black';
const GREY = 'grey';
const THEME = 'primary';

type SFC = React.StatelessFunctionalComponent<any>;
type StoryGenerator = SFC => React$Node;

// Set up for storybook
const stories = storiesOf('SVGs', module);
const CenterDecorator = storyFn => (
  <Background.Grey>{storyFn()}</Background.Grey>
);
stories.addDecorator(CenterDecorator);

// Dynamically import all svg components and generate stories showing all their valid variations

makeStories(
  'logo',
  logoSvgComponents,
  logoSizeColorAndHoverStoryGenerator(
    [BLACK, THEME, WHITE],
    [LOGO_SMALL, LOGO_BIG],
  ),
);

makeStories(
  'functinoal',
  functionalSvgComponents,
  colorAndHoverStoryGenerator([WHITE, GREY, THEME]),
);

makeStories(
  'social',
  socialSvgComponents,
  colorAndHoverStoryGenerator([WHITE, BLACK]),
);

makeStories(
  'trust-companies',
  trustCompaniesSvgComponents,
  colorAndHoverStoryGenerator([WHITE, BLACK]),
);

makeStories(
  'payment-types',
  paymentSvgComponents,
  componentOnlyStoryGenerator(),
);

/**
 * Dynamically generate stories for each React Component in each module in the modules
 * argument, using the provided storyGenerator function.
 *
 * @param modules {object} - An object whose keys are name of the module, and whose values are
 * the default export React Component of the module.
 *
 * @param storyGenerator {function} - function that takes a ReactComponent and returns a
 * ReactElement that consists of all the variations of the input ReactComponent
 */
function makeStories(
  svgType: string,
  modules: { [string]: SFC },
  storyGenerator: StoryGenerator,
) {
  Object.keys(modules).forEach(path => {
    const storyName = `${svgType} / ${path}`;
    const renderFunction: Function = () => storyGenerator(modules[path]);
    stories.add(storyName, renderFunction);
  });
}

/**
 * Story generator that will simply return a React Element of the passed in React Component
 */
function componentOnlyStoryGenerator() {
  return (SVGComponent: SFC) => <SVGComponent />;
}

/**
 * Returns a story generator function that takes a React Component and will generate a React Element
 * containing every combination of colour in colorVariants and hoverable and non-hoverable variants
 * of the input React Component.
 *
 * @param colorVariants {[...string]}
 * @returns {function}
 */
function colorAndHoverStoryGenerator(
  colorVariants: Array<string>,
): StoryGenerator {
  return (SVGComponent: SFC) =>
    colorVariants.map(color => (
      <div key={color}>
        <h3>color=&quot;{color}&quot; hoverable=&quot;true&quot;</h3>
        <SVGComponent color={color} hoverable="true" />

        <h3>color=&quot;{color}&quot;</h3>
        <SVGComponent color={color} />
      </div>
    ));
}

/**
 * Returns a story generator function that takes a React Component and will generate a React Element
 * containing every combination of colour in colorVariants, size in sizeVariants and hoverable and
 * non-hoverable variants of the input React Component.
 *
 * @param colorVariants {[...string]}
 * @param sizeVariants {[...string]}
 * @returns {function}
 */
function logoSizeColorAndHoverStoryGenerator(
  colorVariants: Array<string>,
  sizeVariants: Array<string>,
): StoryGenerator {
  return (SVGComponent: SFC) =>
    colorVariants.map(color =>
      sizeVariants.map(size => (
        <div key={color + size}>
          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
            hoverable=&quot;true&quot;
          </h3>
          <SVGComponent color={color} size={size} hoverable="true" />

          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
          </h3>
          <SVGComponent color={color} size={size} />
        </div>
      )),
    );
}
