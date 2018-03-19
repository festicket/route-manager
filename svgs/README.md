# SVGs

## Adding new SVGs

**Important** 
- When getting new SVGs from the design team, make sure they are exported from Adobe Illustrator with the CSS setting `CSS attributes` and **NOT** `CSS element`. There is a bug with `svgr`/`svgo` that means some colours in the SVG may get lost when the converted SVG uses a `CSS element`.
- The source SVG files should specify a `height` and `width` attribute on the SVG element in the source code. If they don't do this, they will end up with `width: 100%` in IE11. // http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/

SVG Components are dynamically generated in the repo.

New SVGs can be added by placing an svg source file inside a folder in `/svgs/`. Each type of folder generates SVGs with different variation - based on the template that is configured for that folder in `svgs/svgr.sh`


Running `npm run svgr` will take all the SVGs from the source svg folders in `/svgs` and use `svgr` to generate React components from them. These will be placed in `src/components/svgs/generated/`.

**TODO** - `Spot Illustration` and `Display` SVG types still need to be added.