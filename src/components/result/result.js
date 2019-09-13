import React from 'react';
import Loader from '../loader/loader';
import { isUndefined } from 'util';
import Success from '../success/success';
import Retry from '../retry/retry';
import './result.css';

export default function Result(props) {

    // Checking for result if false return retry else success & if undefined then return loader component  
    if (isUndefined(props.result.status)) {
        return <Loader />
    }

    else if (props.result.status !== "false") {
        props.setLink();
        return <Success result={props.result} time={props.time} setAllNull={props.setAllNull} />
    }
    else {
        props.setLink();
        return <Retry result={props.result} time={props.time} setAllNull={props.setAllNull} />
    }
}