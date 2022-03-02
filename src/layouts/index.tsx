import React from "react";

let Layout: React.FC<{}> = function Layout(props) {
  return <div>{props.children}</div>;
};

export default Layout;
