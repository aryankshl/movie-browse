import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 0 10px;
`;

export const Content = styled.div`
    color: var(--white);
    font-size: 20px;
    font-weight: bolder;
    margin: 5px 10px;

    a {
        color: var(--white);
        text-decoration: none;
    }
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
`;
