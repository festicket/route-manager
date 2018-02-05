#!/usr/bin/env bash

svgr --single-quote svgs/functional      --template svgs/svg.functional.template.js      --out-dir src/components/svgs/functional
svgr --single-quote svgs/social          --template svgs/svg.social.template.js          --out-dir src/components/svgs/social
svgr --single-quote svgs/trust-companies --template svgs/svg.social.template.js          --out-dir src/components/svgs/trust-companies
svgr --single-quote svgs/payment-types   --template svgs/svg.payment-types.template.js   --out-dir src/components/svgs/payment-types
