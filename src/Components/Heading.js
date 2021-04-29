import React from "react";

function Heading({ label, num,classN }) {
  return (
    <div className={classN}>
      <span className="label">{label}</span>
      <span className="num">{num}</span>
    </div>
  );
}

export default Heading;
