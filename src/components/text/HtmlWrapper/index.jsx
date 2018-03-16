// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';
import StyledHtmlWrapper from './styles';

type Props = {
  html: string,
};

export default function HtmlWrapper({ html, ...props }: Props) {
  return (
    <StyledHtmlWrapper {...props} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
