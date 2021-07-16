import React from "react";
const sideDrawer = (props) => {
  return (
    <div onClick={props.clicked}>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};

export default sideDrawer;
