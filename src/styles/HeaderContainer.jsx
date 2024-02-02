import styled from "styled-components";

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