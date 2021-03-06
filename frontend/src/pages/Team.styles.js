﻿import styled from 'styled-components';

export const TeamHeader = styled.h2`
    padding: 24px 0px 24px 198px;

    @media only screen and (max-width: 1024px) {
        padding: 12px 0 12px 108px;
    }
`;

export const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 108px;
    background: var(--hermanni-grey-lighter);
`;
