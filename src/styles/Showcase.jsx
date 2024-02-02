import styled from "styled-components";

const Showcase = styled.div`
    
    .desktop {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;   
        width: 25%;
        padding: 0px 1%;
        overflow: hidden;

    @media (max-width: 1024px){
        display: none;
    }
    }

    .mobile {
        display: none;
        @media (max-width: 1024px) {
            display: flex;
            height: auto;
            flex-direction: row;
            width: 100%;
            overflow: hidden;
            gap: var(--spacing-inline-xxs);
        }
    }


`

export default Showcase