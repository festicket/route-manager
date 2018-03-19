// @flow

import * as React from 'react';
import StyledHtmlWrapper from './styles';

type Props = {
  htmlString: string,
};

export default function HtmlWrapper({ htmlString, ...props }: Props) {
  return (
    <StyledHtmlWrapper
      {...props}
      dangerouslySetInnerHTML={{ __html: htmlString }} // eslint-disable-line react/no-danger
    />
  );
}
