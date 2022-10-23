import React from "react";

function Header(props) {
  console.log(props);
  return (
    <div>
      <h1>hello from {props.name}</h1>
      {props.children}
    </div>
  );
}

export default Header;
