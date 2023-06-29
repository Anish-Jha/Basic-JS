import React,{forwardRef}  from "react";
import PropTypes from "prop-types";

export const Pin = forwardRef(({ maxChar, focusHandler,backSpaceHandler},ref) => {
  const keyHandler=(e)=>{
    if(e.keyCode===8){
      backSpaceHandler(e);
    }else{
      focusHandler(e);
    }
   };

  return (
    <input data-testid="pin-input" 
    type="text" ref={ref} maxLength={maxChar} 
    onKeyUp={(e)=>keyHandler(e)}/>
  );
});

Pin.propTypes={
  maxChar:PropTypes.number.isRequired,
}
// Check maxChar prop here
