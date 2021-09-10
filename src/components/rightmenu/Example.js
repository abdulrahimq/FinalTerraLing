import React, { Component } from "react";

class Example extends Component {
  render() {
    return (
      <div
        id={"example-" + this.props.i}
        key={"example-" + this.props.i}
        style={{
          backgroundColor:
            this.props.selected === this.props.i
              ? "rgb(196, 196, 196, .2)"
              : "white",
          padding: "5px",
          marginBottom: "5px"
        }}
        onClick={() => this.props.clickHighlightExample(this.props)}
      >
        <p className="example-header-item">{this.props.value.name}</p>
        <p>Property Description: {this.props.value.description}</p>
        <p>Property Word: {this.props.value.word}</p>
        <p>Property Gloss: {this.props.value.gloss}</p>
        <p>Property Translation: '{this.props.value.translation}'</p>
        <p>Property Comment: {this.props.value.comment}</p>
        <p>Property Creator: {this.props.value.creator}</p>
        <br />
      </div>
    );
  }
}

export default Example;
