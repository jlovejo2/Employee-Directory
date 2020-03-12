import React from "react";

function Row(props) {
    //Will return className row-fluid if  props.fluid is true and row if its false
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;