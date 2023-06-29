export const increamentAction=(payload)=>({
    type: "INCREAMENT_COUNT",
    payload: payload
});
export const decreamentAction=(payload)=>({
    type: "DECREAMENT_COUNT",
    payload: payload
});
export const resetAction=()=>({
    type:"RESET_COUNT",
});