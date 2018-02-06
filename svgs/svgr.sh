#!/usr/bin/env bash

rm -rf src/components/svgs/generated
svgr --single-quote svgs/functional      --template svgs/svg.functional.template.js      --out-dir src/components/svgs/generated/functional
svgr --single-quote svgs/social          --template svgs/svg.social.template.js          --out-dir src/components/svgs/generated/social
svgr --single-quote svgs/trust-companies --template svgs/svg.social.template.js          --out-dir src/components/svgs/generated/trust-companies
svgr --single-quote svgs/payment-types   --template svgs/svg.payment-types.template.js   --out-dir src/components/svgs/generated/payment-types
svgr --single-quote svgs/logo            --template svgs/svg.logo.template.js            --out-dir src/components/svgs/generated/logo
