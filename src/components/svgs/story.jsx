import React from 'react';
import { storiesOf } from '@storybook/react';
import importAll from 'import-all.macro';
import { BRAND, DARK, LIGHT } from './styles/colors';
import { LOGO_BIG, LOGO_SMALL } from './styles/logo-size-styles';
import { Background } from '../../utils/storybook-helpers/index';

// Set up for storybook
const stories = storiesOf('SVGs', module);
const CenterDecorator = storyFn => (
  <Background.Grey>{storyFn()}</Background.Grey>
);
stories.addDecorator(CenterDecorator);

/*
 Dynamically import all svg components and generate stories showing all their valid variations

  importAll.sync is transpiled by babel to be an object that contains all the files in the glob arg.
  It is an object whose keys are paths to the module, and whose values are the imported bindings.
  Each binding is expected to have a default export which is a ReactElement.
*/

const logoSvgComponents = importAll.sync(`./generated/logo/**/*.js`);
makeStories(
  logoSvgComponents,
  logoSizeColorAndHoverStoryGenerator(
    [DARK, BRAND, LIGHT],
    [LOGO_SMALL, LOGO_BIG],
  ),
);

const functionalSvgComponents = importAll.sync(
  `./generated/functional/**/*.js`,
);
makeStories(
  functionalSvgComponents,
  colorAndHoverStoryGenerator([LIGHT, DARK, BRAND]),
);

const socialSvgComponents = importAll.sync(`./generated/social/**/*.js`);
makeStories(socialSvgComponents, colorAndHoverStoryGenerator([LIGHT, DARK]));

const trustCompanySvgComponents = importAll.sync(
  `./generated/trust-companies/**/*.js`,
);
makeStories(
  trustCompanySvgComponents,
  colorAndHoverStoryGenerator([LIGHT, DARK]),
);

const paymentSvgComponents = importAll.sync(
  `./generated/payment-types/**/*.js`,
);
makeStories(paymentSvgComponents, componentOnlyStoryGenerator);

/**
 * Dynamically generate stories for each default export ReactElement in each module in the modules
 * argument, using the provided storyGenerator function.
 *
 * @param modules {object} - contains all the modules imported by a call to importAll.sync
 * An object whose keys are paths to the module, and whose values are the imported bindings.
 * Each binding is expected to have a default export which is a ReactElement.
 *
 * @param storyGenerator {function} - function that takes a ReactElement and returns a
 * ReactElement that consists of all the variations of the input ReactElement
 */
function makeStories(modules, storyGenerator) {
  Object.keys(modules).forEach(path => {
    const storyName = path
      .split('/') // split path
      .slice(2) // remove '.' and 'generated'
      .map(str => str.replace(/(?!^[A-Z])([A-Z])/g, ' $1')) // PascalCase to 'Normal' Case
      .join(' / ') // put the path back together with spaces between the folders
      .replace(/\.(js$)|(jsx$)/, ''); // remove the file extension form the path
    stories.add(storyName, () => storyGenerator(modules[path].default));
  });
}

/**
 * Story generator that will simply return the passed in ReactElement
 *
 * @param ReactElement
 * @returns {ReactElement}
 */
function componentOnlyStoryGenerator(ReactElement) {
  return <ReactElement />;
}

/**
 * Returns a story generator function that takes a ReactElement and will generate a ReactElement
 * containing every combination of colour in colorVariants and hoverable and non-hoverable variants
 * of the input ReactElement.
 *
 * @param colorVariants {[...string]}
 * @returns {function}
 */
function colorAndHoverStoryGenerator(colorVariants) {
  return ReactElement =>
    colorVariants.map(color => (
      <div key={color}>
        <h3>color=&quot;{color}&quot; hoverable=&quot;true&quot;</h3>
        <ReactElement color={color} hoverable="true" />

        <h3>color=&quot;{color}&quot;</h3>
        <ReactElement color={color} />
      </div>
    ));
}

/**
 * Returns a story generator function that takes a ReactElement and will generate a ReactElement
 * containing every combination of colour in colorVariants, size in sizeVariants and hoverable and
 * non-hoverable variants of the input ReactElement.
 *
 * @param colorVariants {[...string]}
 * @param sizeVariants {[...string]}
 * @returns {function}
 */
function logoSizeColorAndHoverStoryGenerator(colorVariants, sizeVariants) {
  return ReactElement =>
    colorVariants.map(color =>
      sizeVariants.map(size => (
        <div key={color + size}>
          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
            hoverable=&quot;true&quot;
          </h3>
          <ReactElement color={color} size={size} hoverable="true" />

          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
          </h3>
          <ReactElement color={color} size={size} />
        </div>
      )),
    );
}
