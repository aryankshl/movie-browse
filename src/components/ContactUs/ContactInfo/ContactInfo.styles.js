import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
`;

export const Content = styled.div`
    color: var(--white);
    margin: 0 30px;
    font-size: 20px;
    font-weight: bolder;
    margin: 5px 10px;

    a {
        color: var(--white);
        text-decoration: none;
    }
`;

export const Image = styled.img`
  width: 100%;
  margin: 5px 0px;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
`;
