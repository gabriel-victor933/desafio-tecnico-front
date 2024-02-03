import styled, { keyframes } from 'styled-components';

const MoveLeft = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-360%);
    }
`;

const ShowcaseImageMobile = styled.img`
  width: 40vw;
  aspect-ratio: 1/2;
  animation-duration: 5s;
  animation-name: ${MoveLeft};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default ShowcaseImageMobile;
