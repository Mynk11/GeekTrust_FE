import { INCREMENT, DECREMENT } from './constants';

var count = ["May"];

function addOption(state) {
    var updatedCount = "";
    console.log("State from addOption", state);
    if (count.indexOf(state) === -1)
        updatedCount = count.push(state);
    console.log("Updated Count is::", updatedCount, count);
    return count;


}
function removeOption(state) {
    console.log("State from addOption", state);
    var updatedCount = [];
    if (count.length > 1) {
        count.pop();
    }
    console.log("Updated Count is::", updatedCount, count);
    return count;


}


export default function Counter(state = count, action = {}) {
    //console.log("action is:", action, state);

    switch (action.type) {
        case INCREMENT:
            //console.log("INCREMENT :", state);
            return addOption(action.payload);
        case DECREMENT:
            return removeOption(action.payload);
        default:
            console.log("Default case Runs");
            return null;
    }


}

