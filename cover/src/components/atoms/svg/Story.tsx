import React from 'react';
import styled from 'styled-components';

import Flex, { BoxLayoutPropsType, boxLayoutPropsInit } from 'cover/flexes';
import styles from 'cover/styles';

export type Props = {
  className?: string;
} & BoxLayoutPropsType;

const Component: React.FC<Props> = (props: Props) => {
  const p: Props = {
    ...boxLayoutPropsInit,
    ...props,
  };
  return (
    <Container {...p}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M77 545 c-4 -9 -7 -90 -7 -180 0 -182 4 -195 64 -195 41 0 121 -27
137 -46 6 -8 15 -14 20 -14 5 0 9 82 9 183 0 178 -1 184 -22 203 -45 40 -82
56 -138 61 -47 5 -58 3 -63 -12z"
          />
          <path
            d="M455 553 c-23 -6 -62 -30 -92 -57 -22 -19 -23 -25 -23 -203 0 -101 4
-183 9 -183 5 0 14 6 20 14 16 19 96 46 137 46 60 0 64 13 64 195 0 90 -3 170
-6 179 -6 16 -63 20 -109 9z"
          />
          <path
            d="M11 476 c-8 -9 -11 -72 -9 -202 l3 -189 127 0 c100 0 124 3 116 12
-13 16 -101 43 -138 43 -14 0 -36 7 -48 16 -21 15 -22 21 -22 169 0 150 -6
179 -29 151z"
          />
          <path
            d="M607 483 c-4 -3 -7 -75 -7 -159 0 -147 -1 -154 -22 -168 -12 -9 -34
-16 -48 -16 -37 0 -125 -27 -138 -43 -8 -9 16 -12 116 -12 l127 0 3 191 c2
152 0 194 -11 203 -8 6 -17 8 -20 4z"
          />
        </g>
      </svg>
    </Container>
  );
};

export default Component;

const Container = styled(Flex)`
  width: 32px;
  height: 32px;
  svg {
    width: inherit;
    height: inherit;
  }
  path {
    fill: ${styles.baseColor};
  }
`;
