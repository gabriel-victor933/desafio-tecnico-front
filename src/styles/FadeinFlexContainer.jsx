import styled, { keyframes } from 'styled-components';
import FlexContainer from './FlexContainer';

const Fadein = keyframes`
      0% {
    transform: translateY(50px);
    opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const FadeinFlexContainer = styled(FlexContainer)`
  animation: ${Fadein} 0.8s ease-in both;
  animation-iteration-count: 1;
`;

export default FadeinFlexContainer;
