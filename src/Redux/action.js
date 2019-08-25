import { INCREMENT, DECREMENT } from './constants';


export const CounterIncrement = (state) => {
    console.log("State from action::", state)
    return {
        type: INCREMENT,
        payload: state
    }
}

export const CounterDecrement = (state) => {
    return {
        type: DECREMENT,
        payload: state
    }
}