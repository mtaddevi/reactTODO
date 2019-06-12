import React from "react";

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={headerStyle}>
        <h1>TODOList</h1>
      </header>
    );
  }
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
