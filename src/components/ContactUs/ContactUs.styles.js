import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
    justify-content: space-around;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: 20px;
`;

export const CenteredContent = styled.div`
    text-align: center;
    margin: 0 auto;
`;

export const Heading = styled.h1`
    font-size: 60px;
`;

export const Description = styled.p`
    font-size: 24px;
`;

export const MediaIcons = styled.div`
color: var(--white);
a {
    font-size: 16px;
    height: 45px;
    width: 45px;
    display: inline-block;
    text-align: center;
    line-height: 43px;
    border-radius: 5px;
    border: 2px solid #222222;
    margin: 0px 5px 0 0;
    transition: all 0.3s ease;
    :hover {
        border-color: #eb2f06;
    }
}`;

export const Form = styled.form`
`;