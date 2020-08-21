﻿import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useStateValue } from '../../contexts/state';
import { buildTypes, suiteTypes } from '../../utils/parentDataTypes';

import ParentTable from './ParentTable';

const ParentSeries = () => {
    const { seriesId, buildId, testId } = useParams();
    const [
        {
            parentData: { buildData },
            branchesState,
        },
        dispatch,
    ] = useStateValue();

    useEffect(() => {
        if (branchesState) {
            const branch = branchesState.series?.find(
                ({ id: serie_id }) => serie_id === parseInt(seriesId, 10)
            );
            const fetchData = async () => {
                dispatch({ type: 'setSeriesData', seriesData: branch });
                dispatch({
                    type: 'setSelectedBranch',
                    name: branch.name || ' ',
                    id: seriesId,
                    team: branch.team || ' ',
                });
                try {
                    const { last_build } = branch;
                    const buildUrl = `/data/series/${seriesId}/builds/${last_build}/info?`;
                    const res = await fetch(buildUrl);
                    const json = await res.json();
                    const buildData = json.build;

                    dispatch({ type: 'setBuildData', buildData });
                } catch (error) {
                    dispatch({ type: 'setErrorState', errorState: error });
                }
            };

            fetchData();
        }
        // returned function will be called on component unmount
        return () => {
            dispatch({ type: 'flushParentData' });
        };
    }, [seriesId, buildId, branchesState]);

    const types = testId ? suiteTypes : buildTypes;

    return <ParentTable data={buildData} types={types} />;
};

export default ParentSeries;
