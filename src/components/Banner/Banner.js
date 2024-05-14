import React from "react";

function Banner({ status, Children }) {
  return <div className={`${status} banner`}>{Children}</div>;
}

export default Banner;
