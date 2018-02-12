#!/usr/bin/env bash

rm -rf src/components/svgs/generated

makeSvgComponents () {
    local svg_type=$1
    local source_dir=svgs/${svg_type}
    local template=svgs/svg.${svg_type}.template.js
    local output_dir=src/components/svgs/generated/${svg_type}

    svgr --no-title ${source_dir} --template ${template} --out-dir ${output_dir}
    folder-module ${output_dir}
}

# Generate svg components and export each component from a single file
# This runs in parallel to speed up execution time
for svg_type in functional social logo payment-types trust-companies;
do
    makeSvgComponents "$svg_type" &
done
wait

# add flow to the top of the generated folder-module files
echo "Adding flow to generated files"
find src/components/svgs/generated/*.js -exec sed -i '' '1s/^/\/\/ @flow\
/' {} \;

# lint all the generated files
echo "Linting generated files"
eslint src/components/svgs/generated/* --fix
