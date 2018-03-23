// @flow

import styled from 'styled-components';
import breakpoint from 'src/utils/breakpoint';

export const WrapperHeading = styled.div`
  .current {
    ::after {
      ${breakpoint('xs')`
        content: 'xs';
      `};
      ${breakpoint('sm')`
        content: 'sm';
      `};
      ${breakpoint('md')`
        content: 'md';
      `};
      ${breakpoint('lg')`
        content: 'lg';
      `};
    }
  }
`;

const WrapperBase = styled.div`
  font-family: monospace;
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;

  > * {
    display: flex;
    flex-basis: 100%;

    ${breakpoint('to-md')`
      flex-direction: column;
    `};
  }

  > * > * {
    background-color: red;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: white;

    ${breakpoint('from-md')`
      &:not(:last-child) {
        margin-right: 10px;
      };
    `};
  }
`;

export const WrapperBreakpoint = styled(WrapperBase)`
  ${breakpoint('xs')`
    .xs {
      background-color: green;
    }
  `};

  ${breakpoint('sm')`
    .sm {
      background-color: green;
    }
  `};

  ${breakpoint('md')`
    .md {
      background-color: green;
    }
  `};

  ${breakpoint('lg')`
    .lg {
      background-color: green;
    }
  `};

  ${breakpoint('from-sm')`
    .from-sm {
      background-color: green;
    }
  `};

  ${breakpoint('from-md')`
    .from-md {
      background-color: green;
    }
  `};

  ${breakpoint('from-lg')`
    .from-lg {
      background-color: green;
    }
  `};

  ${breakpoint('to-sm')`
    .to-sm {
      background-color: green;
    }
  `};

  ${breakpoint('to-md')`
    .to-md {
      background-color: green;
    }
  `};

  ${breakpoint('to-lg')`
    .to-lg {
      background-color: green;
    }
  `};
`;

export const WrapperBreakpointMedia = styled(WrapperBase)`
  ${breakpoint('media-xs')} {
    .media-xs {
      background-color: green;
    }
  }

  ${breakpoint('media-sm')} {
    .media-sm {
      background-color: green;
    }
  }

  ${breakpoint('media-md')} {
    .media-md {
      background-color: green;
    }
  }

  ${breakpoint('media-lg')} {
    .media-lg {
      background-color: green;
    }
  }

  ${breakpoint('media-from-sm')} {
    .media-from-sm {
      background-color: green;
    }
  }

  ${breakpoint('media-from-md')} {
    .media-from-md {
      background-color: green;
    }
  }

  ${breakpoint('media-from-lg')} {
    .media-from-lg {
      background-color: green;
    }
  }

  ${breakpoint('media-to-sm')} {
    .media-to-sm {
      background-color: green;
    }
  }

  ${breakpoint('media-to-md')} {
    .media-to-md {
      background-color: green;
    }
  }

  ${breakpoint('media-to-lg')} {
    .media-to-lg {
      background-color: green;
    }
  }
`;
