import React from 'react';
import { storiesOf } from '@storybook/react';
import importAll from 'import-all.macro';
import { LIGHT, DARK, BRAND, LOGO_BIG, LOGO_SMALL } from './styles';
import { Background } from '../../utils/storybook-helpers/index';

// Set up for storybook
const stories = storiesOf('SVGs', module);
const CenterDecorator = storyFn => (
  <Background.Grey>{storyFn()}</Background.Grey>
);
stories.addDecorator(CenterDecorator);

// Dynamically import SVGs and turn them into stories showing all their valid variations

const socialSvgComponents = importAll.sync(`./generated/social/**/*.js`);
makeStories(socialSvgComponents, colorAndHoverVariationTemplate([LIGHT, DARK]));

const trustCompanySvgComponents = importAll.sync(
  `./generated/trust-companies/**/*.js`,
);
makeStories(
  trustCompanySvgComponents,
  colorAndHoverVariationTemplate([LIGHT, DARK]),
);

const paymentSvgComponents = importAll.sync(
  `./generated/payment-types/**/*.js`,
);
makeStories(paymentSvgComponents, componentOnlyTemplate);

const functionalSvgComponents = importAll.sync(
  `./generated/functional/**/*.js`,
);
makeStories(
  functionalSvgComponents,
  colorAndHoverVariationTemplate([LIGHT, DARK, BRAND]),
);

const logoSvgComponents = importAll.sync(`./generated/logo/**/*.js`);
makeStories(
  logoSvgComponents,
  logoSizeColorAndHoverVariationTemplate(
    [DARK, BRAND, LIGHT],
    [LOGO_SMALL, LOGO_BIG],
  ),
);

/**
 * Dynamically generate stories for each component in the components object
 * using the provided template generator function.
 *
 * @param components {object} - An object whose keys are paths to modules, and whose values are the modules
 * @param storyGenerator {function} - A function that takes a module that exports a default React component.
 * It returns a React Component to be used as the story for the component argument.
 */
function makeStories(components, storyGenerator) {
  Object.keys(components).forEach(key => {
    const storyName = key
      .split('/') // split path
      .slice(2) // remove '.' and 'generated'
      .map(str => str.replace(/(?!^[A-Z])([A-Z])/g, ' $1')) // PascalCase to 'Normal' Case
      .join(' / ') // put the path back together with spaces between the folders
      .replace(/\.(js$)|(jsx$)/, ''); // remove the file extension form the path
    stories.add(storyName, () => storyGenerator(components[key]));
  });
}

/**
 * Story generator that will generate the default Component of the module with no variations
 *
 * @param Module
 * @returns {ReactElement}
 */
function componentOnlyTemplate(Module) {
  return <Module.default />;
}

/**
 * Returns a story generator that will generate a story for every colour in colorVariants with a
 * hoverable and a non-hoverable variant
 *
 * @param colorVariants {[...string]}
 * @returns {ReactElement}
 */
function colorAndHoverVariationTemplate(colorVariants) {
  return Module =>
    colorVariants.map(color => (
      <div key={color}>
        <h3>color=&quot;{color}&quot; hoverable=&quot;true&quot;</h3>
        <Module.default color={color} hoverable="true" />

        <h3>color=&quot;{color}&quot;</h3>
        <Module.default color={color} />
      </div>
    ));
}

/**
 * Returns a story generator that will generate a story for every combination of
 * colour in colorVariants, size in sizeVariants and hoverable and non-hoverable variant
 *
 * @param colorVariants {[...string]}
 * @param sizeVariants {[...string]}
 * @returns {ReactElement}
 */
function logoSizeColorAndHoverVariationTemplate(colorVariants, sizeVariants) {
  return Module =>
    colorVariants.map(color =>
      sizeVariants.map(size => (
        <div key={color + size}>
          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
            hoverable=&quot;true&quot;
          </h3>
          <Module.default color={color} size={size} hoverable="true" />

          <h3>
            color=&quot;{color}&quot; size=&quot;{size}&quot;
          </h3>
          <Module.default color={color} size={size} />
        </div>
      )),
    );
}
