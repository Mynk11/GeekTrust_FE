import React from 'react';
import Loader from '../loader/loader';
import { isUndefined } from 'util';
import Success from '../success/success';
import Retry from '../retry/retry';
import './result.css';
export default function Result(props) {

    const setAllNull = () => {
        props.setTotalTime(0);
        props.selectedPlanet([]);
        props.selectedVehicles([]);
        props.setDistanceObj({});
        props.setTime({});
        props.setselVehicles({});
        props.setSelectePlanetObj({});
        props.setResult({});

    }

    if (isUndefined(props.result.status)) {

        return <Loader />
    }

    else if (props.result.status !== "false") {
        return <Success result={props.result} time={props.time} setAllNull={setAllNull} />
    }
    else {
        return <Retry result={props.result} time={props.time} setAllNull={setAllNull} />
    }
}