import React from 'react';
import styled from 'styled-components';

type Props = {
  size?: string;
};

const SpinnerIcon: React.FC<Props> = ({ size = '60' }) => {
  return <Icon size={size} />;
};

const Icon = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-top: 0.3em solid rgba(79, 174, 159, 0.7);
  border-right: 0.3em solid rgba(0, 0, 0, 0);
  border-bottom: 0.3em solid rgba(0, 0, 0, 0);
  border-left: 0.3em solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  animation: load8 1s infinite cubic-bezier(0.39, 0.58, 0.57, 1);
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerIcon;
