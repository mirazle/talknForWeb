import { css } from '@emotion/react';
import React, { useState } from 'react';
import type { FunctionComponent } from 'react';

type Props = {
  onClick: () => void;
};

const Component: FunctionComponent<Props> = (props: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  return (
    <div css={styles.container} onClick={props.onClick} onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#03a9f4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" />
        <path
          fill="#fff"
          d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"
        />
      </svg>
    </div>
  );
};

export default Component;

const styles = {
  container: css``,
};
