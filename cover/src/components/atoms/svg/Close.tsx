import React from 'react';
import styled from 'styled-components';

import Flex, { FlexBoxLayoutPropsType, flexLayoutCenterPropsInit, OnHandleType } from 'cover/flexes';
import styles from 'cover/styles';

export type Props = FlexBoxLayoutPropsType & OnHandleType;

const Component: React.FC<Props> = (props: Props) => {
  const p: Props = {
    ...flexLayoutCenterPropsInit,
    ...props,
  };
  return (
    <Container {...p}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt"
        height="512.000000pt"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M2332 5110 c-611 -59 -1163 -320 -1589 -751 -406 -411 -648 -908
-725 -1489 -16 -123 -16 -497 0 -620 77 -581 319 -1078 725 -1489 214 -216
414 -360 692 -496 366 -181 705 -259 1120 -259 224 0 326 9 510 46 603 121
1134 450 1525 946 141 179 292 455 374 684 529 1471 -349 3055 -1874 3382
-209 45 -554 65 -758 46z m485 -405 c158 -20 289 -48 414 -89 708 -230 1253
-816 1428 -1537 338 -1395 -732 -2722 -2159 -2676 -246 8 -416 37 -633 109
-592 196 -1086 666 -1321 1258 -106 269 -152 539 -143 850 6 220 26 356 81
545 106 367 296 678 582 955 339 327 744 521 1224 584 142 19 383 19 527 1z"
          />
          <path
            d="M1781 3448 c-49 -24 -95 -87 -105 -144 -5 -21 -1 -55 8 -87 14 -48
36 -73 311 -347 l295 -295 -289 -290 c-159 -159 -296 -304 -304 -320 -51 -101
-12 -221 87 -272 42 -22 132 -21 176 2 19 10 166 147 325 306 l291 289 284
-286 c162 -162 302 -294 325 -306 85 -45 200 -16 252 63 35 53 43 140 18 190
-9 19 -148 166 -308 326 l-292 293 292 293 c191 191 298 305 308 329 69 166
-100 334 -260 259 -26 -12 -141 -120 -325 -305 -157 -157 -289 -286 -295 -286
-5 0 -140 130 -300 290 -192 191 -303 294 -327 305 -52 21 -115 19 -167 -7z"
          />
        </g>
      </svg>
    </Container>
  );
};

export default Component;

const Container = styled(Flex)`
  width: 36pxx;
  height: 36px;
  svg {
    width: inherit;
    height: inherit;
    cursor: pointer;
  }
  path {
    fill: ${styles.baseColor};
  }
`;
