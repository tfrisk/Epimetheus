import React from 'react';
import { WindowTable } from 'window-table';
import { useStateValue } from '../../contexts/state';
import { isEmpty } from 'ramda';

const Xor = () => {
    const [
        {
            historyDataState: { history }
        }
    ] = useStateValue();

    const columns = [
        { key: 'suite', width: 100, title: 'Suite' },
        { key: 'test_case', width: 100, title: 'Test' }
    ];

    // const data = history.filter(h => !isEmpty(h.test_cases));
    const data = history
        .map(h => h.test_cases)
        .filter(h => !isEmpty(h))
        .flat();
    // .map(d => {
    //     d[suite] = history.test_cases.find(t => t.test_id === d.test_id)
    //     return d;
    // });
    console.log('data on nyt', data);
    // console.log('test cases', test_cases);

    return (
        <WindowTable
            data={data}
            columns={columns}
            style={{ height: '800px' }}
        />
    );
};

export default Xor;
