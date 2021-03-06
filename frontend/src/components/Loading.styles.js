﻿import styled from 'styled-components';

export const LoadingDiv = styled.div`
    height: 30px;
    line-height: 30px;
    padding: 48px 198px;
    &:after {
        margin: 0;
        padding: 0;
        line-height: 30px;
        font-size: 1rem;
        content: '...';
        vertical-align: bottom;
        display: inline-block;
        width: 0px;
        height: 30px;
        animation-name: history-loader;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        overflow: hidden;
    }
    @keyframes history-loader {
        from {
            width: 0;
        }
        to {
            width: 140px;
        }
    }
`;
