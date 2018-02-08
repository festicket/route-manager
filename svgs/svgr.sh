#!/usr/bin/env bash

rm -rf src/components/svgs/generated
svgr --single-quote --trailing-comma all svgs/functional      --template svgs/svg.functional.template.js      --out-dir src/components/svgs/generated/functional
svgr --single-quote --trailing-comma all svgs/social          --template svgs/svg.social.template.js          --out-dir src/components/svgs/generated/social
svgr --single-quote --trailing-comma all svgs/trust-companies --template svgs/svg.trust-companies.template.js --out-dir src/components/svgs/generated/trust-companies
svgr --single-quote --trailing-comma all svgs/payment-types   --template svgs/svg.payment-types.template.js   --out-dir src/components/svgs/generated/payment-types
svgr --single-quote --trailing-comma all svgs/logo            --template svgs/svg.logo.template.js            --out-dir src/components/svgs/generated/logo
