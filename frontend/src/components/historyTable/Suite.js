import React from 'react';
import { dashify } from '../../helpers';
import SuiteName from '../SuiteName';
import TestStatus from './TestStatus';
import TestCase from './TestCase';

const Suite = ({ builds, test_case, suite, index, test_cases }) => {
  return (
    <tr data-ta={`${dashify(suite)}`}>
      {index === 0 && (
        <SuiteName suiteName={suite} tableCellHeight={test_cases.length} />
      )}
      <TestCase test_case={test_case} />
      <TestStatus builds={builds} />
    </tr>
  );
};

export default Suite;
