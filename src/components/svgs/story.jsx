import React from 'react';
import { storiesOf } from '@storybook/react';
import importAll from 'import-all.macro';
import { LIGHT, DARK, BRAND, LOGO_BIG, LOGO_SMALL } from './styles';
import { Background } from '../../utils/storybook-helpers/index';

const stories = storiesOf('SVGs', module);
const CenterDecorator = storyFn => (
  <Background.Grey>{storyFn()}</Background.Grey>
);
stories.addDecorator(CenterDecorator);

function makeStories(components, template) {
  Object.keys(components).forEach(key => {
    const storyName = key
      .split('/') // split path
      .slice(2) // remove '.' and 'generated'
      .map(str => str.replace(/(?!^[A-Z])([A-Z])/g, ' $1')) // PascalCase to 'Normal' Case
      .join(' / ') // put the path back together with spaces between the folders
      .replace(/\.(js$)|(jsx$)/, ''); // remove the file extension form the path
    stories.add(storyName, () => template(components[key]));
  });
}

const componentOnlyTemplate = module =>
  React.createElement(module.default, null, null);

const colorAndHoverVariationTemplate = colorVariants => module =>
  colorVariants.map(variant => (
    <div key={variant}>
      <h3>{variant}</h3>
      {React.createElement(
        module.default,
        { color: variant, hoverable: 'true' },
        null,
      )}
    </div>
  ));

const logoSizeColorAndHoverVariationTemplate = (
  colorVariants,
  logoSize,
) => module =>
  colorVariants.map(variant =>
    logoSize.map(size => (
      <div key={variant + size}>
        <h3>
          {variant} {size}
        </h3>
        {React.createElement(
          module.default,
          { color: variant, size, hoverable: 'true' },
          null,
        )}
      </div>
    )),
  );

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
    [LIGHT, DARK, BRAND],
    [LOGO_SMALL, LOGO_BIG],
  ),
);

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
