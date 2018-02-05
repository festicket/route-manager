import React from 'react';
import { storiesOf } from '@storybook/react';
import importAll from 'import-all.macro';
import { colors } from './styles';

const stories = storiesOf('SVGs', module);
const colorVariants = Object.keys(colors);

function makeStories(components, template) {
  Object.keys(components).forEach(key => {
    const storyName = key.replace(/\//g, ' / ').replace(/\.(js$)|(jsx$)/, '');
    stories.add(storyName, () => template(components[key]));
  });
}

const componentOnlyTemplate = module => (
  <div>{React.createElement(module.default, null, null)}</div>
);

const colorAndHoverVariationTemplate = module => (
  <div>
    {colorVariants.map(variant => (
      <div key={variant}>
        {variant}
        {React.createElement(
          module.default,
          { color: variant, hoverable: 'true' },
          null,
        )}
      </div>
    ))}
  </div>
);

const functionalSvgComponents = importAll.sync(`./functional/**/*.js`);
makeStories(functionalSvgComponents, colorAndHoverVariationTemplate);

const socialSvgComponents = importAll.sync(`./social/**/*.js`);
makeStories(socialSvgComponents, colorAndHoverVariationTemplate);

const trustCompanySvgComponents = importAll.sync(`./trust-companies/**/*.js`);
makeStories(trustCompanySvgComponents, colorAndHoverVariationTemplate);

const paymentSvgComponents = importAll.sync(`./payment-types/**/*.js`);
makeStories(paymentSvgComponents, componentOnlyTemplate);
