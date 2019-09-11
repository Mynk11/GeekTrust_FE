import React from 'react';
import Loader from '../loader/loader';
import { isUndefined } from 'util';
import Success from '../success/success';
import Retry from '../retry/retry';
import './result.css';
export default function Result(props) {

    if (isUndefined(props.result.status)) {

        return <Loader />
    }

    else if (props.result.status !== "false") {
        return <Success result={props.result} time={props.time} setAllNull={props.setAllNull} />
    }
    else {
        return <Retry result={props.result} time={props.time} setAllNull={props.setAllNull} />
    }
}