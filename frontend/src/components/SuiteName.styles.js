﻿import styled from 'styled-components';

export const StyledData = styled.td`
    padding: 10px;
    text-align: left;
    vertical-align: top;
    background: var(--nero-white);
    min-width: 25%;

    @media only screen and (min-width: 1280px) {
        span:nth-child(3) {
            padding-left: 8px;
        }
        span:nth-child(5) {
            padding-left: 16px;
        }
        span:nth-child(7) {
            padding-left: 24px;
        }
        span:nth-child(9) {
            padding-left: 32px;
        }
        span:nth-child(11) {
            padding-left: 40px;
        }
        span:nth-child(13) {
            padding-left: 48px;
        }
        span:nth-child(15) {
            padding-left: 56px;
        }
        span:nth-child(17) {
            padding-left: 64px;
        }
        span:nth-child(19) {
            padding-left: 72px;
        }
    }
`;
