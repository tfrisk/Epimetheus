﻿import styled from 'styled-components';

export const SelectedTestContainer = styled.div`
    background: #fff;
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        border: 1px solid var(--hermanni-grey);
    }
    thead {
        background: var(--hermanni-grey);
        text-align: left;

        th {
            color: var(--gradient-black);
            font-weight: bold;
        }

        th:first-child {
            padding-left: 8px;
        }
    }
    .table-item {
        padding: 0.25rem 0rem;
        white-space: normal;
        overflow: hidden;
    }

    tbody tr {
        border-bottom: 1px solid #eee;
    }

    tbody td:first-child {
        padding-left: 8px;
    }

    .tableLogLevel {
        width: 10%;
    }
    .tableMessage {
        width: 70%;
    }
    .tableTimeStamp {
        width: 20%;
    }
`;

export const FlexGrowColumn = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

export const LogRow = styled.tr`
    background: ${props =>
        props.log_level === 'FAIL' && 'var(--nelson-purple)'};
    color: ${props => props.log_level === 'FAIL' && 'var(--nero-white)'};
`;

export const InfoLevel = styled.td`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        position: relative;
        top: -2px;
        left: -16px;
    }
`;