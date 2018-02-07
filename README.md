# Festicket React UI Components

## SVGs

React SVG Components can be found in `src/components/svgs/generated/`.

Only use these components with the options provided. Never apply custom styling to them. The possible options for each svg component can be seen in the Storybook for this project.

### Adding new SVGs

SVGs Components are dynamically generated in the repo.
 
Running `yarn svgr` will take all the svgs from the source svg folders in `/svgs` and use `svgr` to generate React components from them. These will be placed in `src/components/svgs/generated/`.

New svgs can be added by placing an svg source file inside a folder in `/svgs/`. Each type of folder generates svgs in a different way - based on the template that is configured for that folder in `svgs/svgr.sh`

**TODO** - `Spot Illustration` and `Display` svg types which need to be added in the future.

