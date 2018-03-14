# Festicket React UI Components

## SVGs

React SVG Components can be found in `src/components/svgs/generated/`.

Only use these components with the options provided. Never apply custom styling to them. The possible options for each svg component can be seen in the Storybook for this project.

### Adding new SVGs

**Important** - When getting new SVGs from the design team, make sure they are exported from Adobe Illustrator with the CSS setting `CSS attributes` and **NOT** `CSS element`. There is a bug with `svgr`/`svgo` that means some colours in the SVG may get lost when the converted SVG uses a `CSS element`.

SVG Components are dynamically generated in the repo.

New SVGs can be added by placing an svg source file inside a folder in `/svgs/`. Each type of folder generates SVGs with different variation - based on the template that is configured for that folder in `svgs/svgr.sh`

// There is a bug in IE 11 where SVGs without width have width of 100%
// http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/
// Make sure svgs set a width and height property


Running `npm run svgr` will take all the SVGs from the source svg folders in `/svgs` and use `svgr` to generate React components from them. These will be placed in `src/components/svgs/generated/`.

**TODO** - `Spot Illustration` and `Display` SVG types which need to be added in the future.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://semaphoreci.com/api/v1/projects/ed4738ad-82c8-4c98-9548-9ee54469ff71/1764524/badge.svg)](https://semaphoreci.com/festicketci/react-ui-components)
