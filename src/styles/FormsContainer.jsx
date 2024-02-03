import styled from 'styled-components';

const FormsContainer = styled.div`
  flex-direction: column;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input:first-child {
    margin-bottom: var(--spacing-stack-xxs);
  }

  input:nth-child(2) {
    margin-bottom: var(--spacing-stack-lg);
  }

  button {
    width: 45%;

    @media (max-width: 1280px) {
      width: 50%;
    }
  }
`;

export default FormsContainer;
