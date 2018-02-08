# Festicket React UI Components

## SVGs

React SVG Components can be found in `src/components/svgs/generated/`.

Only use these components with the options provided. Never apply custom styling to them. The possible options for each svg component can be seen in the Storybook for this project.

### Adding new SVGs

**Important** - When getting new SVGs from the design team, make sure they are exported from Adobe Illustrator with the CSS setting `CSS attributes` and **NOT** `CSS element`. There is a bug with `svgr`/`svgo` that means some colours in the SVG may get lost when the converted SVG uses a `CSS element`. 

SVG Components are dynamically generated in the repo.

New SVGs can be added by placing an svg source file inside a folder in `/svgs/`. Each type of folder generates SVGs with different variation - based on the template that is configured for that folder in `svgs/svgr.sh`

Running `yarn svgr` will take all the SVGs from the source svg folders in `/svgs` and use `svgr` to generate React components from them. These will be placed in `src/components/svgs/generated/`.

You will need to restart Storybook to see the new SVGs there.

**TODO** - `Spot Illustration` and `Display` SVG types which need to be added in the future.

### Why babel caching needs to be disabled for SVGS in Storybook -
 
To make Storybook (ie Webpack) see new SVGs, the `cacheDirectory` option used by `babel-loader` must be set to `false`.
This is done in the `.babelrc` file. Webpack caches the babel transpilation by hashing changes to the watched files.

Because the SVG Components are dynamically imported using the babel macro `import-all.macro` in the `story.js` file, Webpack is not actively watching these files. Therefore they are not included in the hash used for caching. Changes to them will not affect the babel cache and Webpack will continue to use the babel transpiled version from the cache that does not pick up added/removed files in the imported directories by `import-all.macro`.
