function reducerFunction(state, action){
switch(action.type){
    case "INCREAMENT_COUNT":{
        return state+action.payload;
    }
    case "DECREAMENT_COUNT":{
        return state-action.payload;
    }
    case "RESET_COUNT":{
        return 0;
    }
    default:{
        return state;
    }
}
}

export default reducerFunction;