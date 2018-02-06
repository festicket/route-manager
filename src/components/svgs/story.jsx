// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import importAll from 'import-all.macro';
import { LIGHT, DARK, BRAND, LOGO_BIG, LOGO_SMALL } from './styles';

const stories = storiesOf('SVGs', module);

function makeStories(components, template) {
  Object.keys(components).forEach(key => {
    const storyName = key
      .split('/')
      .map(str => str.replace(/(?!^[A-Z])([A-Z])/g, ' $1'))
      .join(' / ')
      .replace(/\.(js$)|(jsx$)/, '');
    stories.add(storyName, () => template(components[key]));
  });
}

const componentOnlyTemplate = module => (
  <div>{React.createElement(module.default, null, null)}</div>
);

const colorAndHoverVariationTemplate = colorVariants => module => (
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

const logoSizeColorAndHoverVariationTemplate = (
  colorVariants,
  logoSize,
) => module => (
  <div>
    {colorVariants.map(variant =>
      logoSize.map(size => (
        <div key={variant + size}>
          {variant} {size}
          {React.createElement(
            module.default,
            { color: variant, size, hoverable: 'true' },
            null,
          )}
        </div>
      )),
    )}
  </div>
);

const functionalSvgComponents = importAll.sync(`./functional/**/*.js`);
makeStories(
  functionalSvgComponents,
  colorAndHoverVariationTemplate([LIGHT, DARK, BRAND]),
);

const logoSvgComponents = importAll.sync(`./logo/**/*.js`);
makeStories(
  logoSvgComponents,
  logoSizeColorAndHoverVariationTemplate(
    [LIGHT, DARK, BRAND],
    [LOGO_SMALL, LOGO_BIG],
  ),
);

const socialSvgComponents = importAll.sync(`./social/**/*.js`);
makeStories(socialSvgComponents, colorAndHoverVariationTemplate([LIGHT, DARK]));

const trustCompanySvgComponents = importAll.sync(`./trust-companies/**/*.js`);
makeStories(
  trustCompanySvgComponents,
  colorAndHoverVariationTemplate([LIGHT, DARK]),
);

const paymentSvgComponents = importAll.sync(`./payment-types/**/*.js`);
makeStories(paymentSvgComponents, componentOnlyTemplate);
