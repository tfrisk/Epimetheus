﻿import styled from 'styled-components';

export const NavBar = styled.nav`
    background: var(--titan-green);
    color: var(--nero-white);
    display: flex;
    align-items: center;
    min-height: 100px;
`;

export const StyledH2 = styled.h2`
    padding: 0px 24px 0px 40px;
    font-family: 'Hack' !important;
    letter-spacing: 1px;
    @media only screen and (max-width: 540px) {
        width: 0;
        overflow: hidden;
        display: block;
    }
`;

export const LinkContainer = styled.div`
    a {
        margin: 0 15px 0 15px;
        color: var(--nero-white) !important;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        text-decoration: none;
        border-bottom: none;
    }

    a:hover,
    .about:hover,
    .team:hover {
        background: var(--titan-green);
        border-bottom: 3px solid var(--titan-green-darkest);
    }

    .about {
        border-bottom: ${props => !props.team && '3px solid var(--nero-white)'};
    }

    .team {
        border-bottom: ${props => props.team && '3px solid var(--nero-white)'};
    }

    @media only screen and (max-width: 540px) {
        margin-left: 10px;
        a {
            margin: 0 5px 0 5px;
        }
    }
`;
