import React from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { useStateValue } from '../../contexts/state';

const VirtualizedTable = () => {
    const [
        {
            historyDataState: { history }
        }
    ] = useStateValue();

    return (
        <Table
            width={800}
            height={800}
            headerHeight={30}
            rowHeight={30}
            rowCount={history.length}
            rowGetter={({ index }) => history[index]}
        >
            <Column label="name" dataKey="name" width={100} />
            <Column width={200} label="test_cases" dataKey="test_cases" />
        </Table>
    );
};

export default VirtualizedTable;
