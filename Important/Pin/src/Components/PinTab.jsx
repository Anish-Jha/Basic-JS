import React from "react";
import { useRef, useState } from "react";
import {Pin} from "./Pin"
import PropTypes from "prop-types";

export const PinTab = ({ length, maxChar, setOtp}) => {
  const [inputLength]=useState(new Array(length).fill(""));
  const inputRef=useRef([]);
  const [otpVal]=useState(new Array(length).fill(""));

  const focusHandler = (e, index)=>{
    otpVal[index] = e.target.value;
    if(e.target.value.length===maxChar && index<length-1){
      inputRef.current[index+1].focus();
    }
    setOtp(otpVal.join(" "));
  };

  const backSpaceHandler=(e,index)=>{
    otpVal[index] = e.target.value;
    if(e.target.value.length===0 && index>0){
      inputRef.current[index-1].focus();
    }
    setOtp(otpVal.join(" "));
  };
  
  const pasteHandler=(e)=>{
    const data = e.clipboardData.getData("Text").split("").filter((_,index)=>{
      return index<length;
    })
    data.forEach((el, index)=>{
      inputRef.current[index].value=el;
      if(e.target.value.length===maxChar && index<length-1){
        inputRef.current[index+1].focus();
      }
    })
  }

  
  return(
  <div onPaste={pasteHandler} data-testid="pin-tab">{/* Add Pin component here  */}
  {inputLength.map((_, index)=>{
        return(
          <Pin 
          ref={(e)=>{
            inputRef.current[index]=e;
          }}
          key={index}
          maxChar={maxChar}
          focusHandler={(e)=>focusHandler(e, index)}
          backSpaceHandler={(e)=>backSpaceHandler(e, index)}
          />
        )
      })}
 
  </div>
  );
};


PinTab.propTypes={
  maxChar:PropTypes.number.isRequired,
  length:PropTypes.number.isRequired
}
// Check length and maxChar props here
