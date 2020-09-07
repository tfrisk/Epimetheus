// eslint-disable-next-line
import React, { Fragment } from 'react';
import Flakiness from './Flakiness';
import Status from './Status';
import Error from './Error';
import TestCase from './TestCase';
import { dashify } from '../../utils/helpers';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { SuiteRow, StyledTestRow, LinkSuiteName } from './Row.styles';

const Row = ({ test_cases, suite, id, suiteId }) => {
    const tableRow = test_cases.map(({ builds, test_id }, index) => {
        let filteredBuilds = null;
        if (id) {
            filteredBuilds = builds.filter(
                ({ build_number }) => build_number === Number(id)
            );
        }
        const build =
            filteredBuilds !== null && filteredBuilds.length > 0
                ? filteredBuilds[0]
                : builds[0];

        const testRunTime = build ? build.test_run_time : 'ei ole';

        return (
            <SuiteRow key={index} position={index} build={build}>
                {index === 0 && (
                    <LinksSuiteName
                        tableCellHeight={test_cases.length}
                        suiteName={suite}
                        suiteId={suiteId}
                    />
                )}
                <Status build={build} selectedBuild={id} />
                <TestCase
                    testCases={test_cases}
                    index={index}
                    suiteId={suiteId}
                    testId={test_id}
                />

                <Error build={build} />
                <StyledTestRow className="test-time-row">
                    {(testRunTime / 1000).toFixed(3)}s
                </StyledTestRow>
                <Flakiness builds={builds} id={id} />
            </SuiteRow>
        );
    });

    return tableRow;
};

export default Row;

// Show suite name separated on different lines with dots showing depth level
const LinksSuiteName = ({ tableCellHeight, suiteName, suiteId }) => {
    const pathname = useLocation().pathname;
    const correctUrl = pathname.substring(0, pathname.lastIndexOf('/'));
    let tempSuiteName = suiteName.split('.');
    let splitSuiteName = [];
    for (var index = 0; index < tempSuiteName.length; index++) {
        let el = tempSuiteName[index];
        splitSuiteName.push(
            <Fragment key={index}>
                <span>.{el}</span>
                <br />
            </Fragment>
        );
    }

    return (
        <LinkSuiteName
            rowSpan={tableCellHeight}
            data-ta={`suite-${dashify(suiteName)}`}
        >
            <Link to={`${correctUrl}/suite/${suiteId}/history`}>
                <div className="sr-show">Build </div>
                {splitSuiteName}
            </Link>
        </LinkSuiteName>
    );
};
