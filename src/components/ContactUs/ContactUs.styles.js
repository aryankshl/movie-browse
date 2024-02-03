import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .first{
        margin-left: 200px;
    }
    .last{
        margin-right: 200px;
    }
`;

export const Content = styled.div`
    display: inline-block;
    margin: 30px;
    color: var(--white);
`;
