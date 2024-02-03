import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  color: var(--darkGrey);

  label {
    color: var(--white);
  }

  input {
    width: 100%;
    height: 30px;
    border: 0px solid var(--darkGrey);
    border-radius: 20px;
    margin: 14px 0;
    padding: 10px;
  }

  Button {
    color: var(--white);
  }

  .error {
    color: red;
  }
`;

export const Login = styled.p`
  font-weight: bolder;
  font-size: 20px;
`;
