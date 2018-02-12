#!/usr/bin/env bash

rm -rf src/components/svgs/generated

# generate svg components and export each component from a single file
for svg_type in functional social logo payment-types trust-companies;
do
    svgr --no-title svgs/$svg_type --template svgs/svg.$svg_type.template.js --out-dir src/components/svgs/generated/$svg_type
    folder-module src/components/svgs/generated/$svg_type
done

# add flow to the top of the generated folder-module files
find src/components/svgs/generated/*.js -exec sed -i '' '1s/^/\/\/ @flow\
/' {} \;

# lint all the generated files
# this fixes some problems svgr can't and means we don't need to use any of svgrs 'prettier' options
eslint src/components/svgs/generated/* --fix