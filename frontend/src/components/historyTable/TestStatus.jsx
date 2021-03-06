import React from 'react';
import { useStateValue } from '../../contexts/state';
import { pickIcon } from '../TestIcon';
import { DefinedData } from './TestStatus.styles';

const TableTestStatusCell = ({ builds, position }) => {
    const [
        {
            historyDataState: { max_build_num },
            amountOfBuilds,
        },
    ] = useStateValue();

    // Creates correct length (amountOfBuilds) of array populated with empty values.
    // The array is used as a base in renderTestStatusRow function
    // to make sure that every test status row is rendered on page with correct length.

    let arr = [];
    const LIMIT =
        max_build_num - amountOfBuilds > 0 ? amountOfBuilds : max_build_num;
    for (let i = 0; i < LIMIT; i++) {
        arr.push({
            build_number: max_build_num - i,
            test_status: '',
            suite_start_time: '',
        });
    }
    return arr.map((filledBuild, i) => {
        let test_status;
        try {
            test_status = builds.find(
                build => build.build_number === filledBuild.build_number
            ).test_status;
        } catch (error) {
            //console.error(error);
        }
        let testStatusIcon;

        !test_status
            ? (testStatusIcon = pickIcon('EMPTY'))
            : (testStatusIcon = pickIcon(test_status));

        return (
            <DefinedData
                data-ta={`test-status-${i}`}
                className={`centerTableCellContent test-result-${test_status}`}
                key={i}
                status={test_status}
                position={position}
            >
                {testStatusIcon}
            </DefinedData>
        );
    });
};

export default TableTestStatusCell;
