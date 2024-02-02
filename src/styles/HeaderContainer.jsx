import styled, {keyframes} from "styled-components";

const Fadein = keyframes`
      0% {
    transform: translateY(-50px);
    opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`


const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 148px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 2;
    animation: ${Fadein} 1s ease-in both;
    animation-iteration-count: 1;

    img {
        width: 120px;
        height: 42px;
    }
    
    @media (max-width: 1440px) {
        padding-right: 148px;

    }

    @media (max-width: 1280px) {
        padding-right: var(--spacing-inline-sm);

        img {
        width: 80px;
        height: 28px;
         }
    }

    @media (max-width: 1024px) {
        padding-right: var(--spacing-inline-xxs);
    }
`

export default HeaderContainer;