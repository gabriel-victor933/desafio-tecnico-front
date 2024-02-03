import styled, { keyframes } from 'styled-components';

const Moveup = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-210px);
    }
`;

const ShowcaseImage = styled.img`
  width: 100%;
  padding: 20px 0px;
  animation-duration: 5s;
  animation-name: ${Moveup};
  animation-iteration-count: infinite;
`;

export default ShowcaseImage;
