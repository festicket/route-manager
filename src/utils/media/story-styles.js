// @flow

import styled from 'styled-components';
import media from 'src/utils/media';

export const WrapperHeading = styled.div`
  .current {
    ::after {
      ${media('xs')} {
        content: 'xs';
      }
      ${media('sm')} {
        content: 'sm';
      }
      ${media('md')} {
        content: 'md';
      }
      ${media('lg')} {
        content: 'lg';
      }
    }
  }
`;

export const WrapperBase = styled.div`
  font-family: monospace;
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;

  > * {
    display: flex;
    flex-basis: 100%;

    ${media('to-md')} {
      flex-direction: column;
    }
  }

  > * > * {
    background-color: red;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: white;

    ${media('from-md')} {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  ${media('xs')} {
    .xs {
      background-color: green;
    }
  }

  ${media('sm')} {
    .sm {
      background-color: green;
    }
  }

  ${media('md')} {
    .md {
      background-color: green;
    }
  }

  ${media('lg')} {
    .lg {
      background-color: green;
    }
  }

  ${media('from-sm')} {
    .from-sm {
      background-color: green;
    }
  }

  ${media('from-md')} {
    .from-md {
      background-color: green;
    }
  }

  ${media('from-lg')} {
    .from-lg {
      background-color: green;
    }
  }

  ${media('to-sm')} {
    .to-sm {
      background-color: green;
    }
  }

  ${media('to-md')} {
    .to-md {
      background-color: green;
    }
  }

  ${media('to-lg')} {
    .to-lg {
      background-color: green;
    }
  }
`;
