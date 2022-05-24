import * as React from "react";

function BiLogOut(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1.5rem"
      width="1.5rem"
      {...props}
    >
      <path d="M16 13L16 11 7 11 7 8 2 12 7 16 7 13z" />
      <path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z" />
    </svg>
  );
}

export default BiLogOut;
