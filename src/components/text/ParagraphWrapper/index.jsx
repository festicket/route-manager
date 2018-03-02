// @flow
/* eslint-disable react/no-danger */

import * as React from 'react';
import StyledParagraphWrapper from './styles';

type Props = {|
  html: string,
|};

export default function ParagraphWrapper({ html }: Props) {
  return <StyledParagraphWrapper dangerouslySetInnerHTML={{ __html: html }} />;
}
