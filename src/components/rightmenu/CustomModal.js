import React, { Component } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
// import "../../css/rightmenu/CustomModal.css";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("CHANGE");
    //    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.createModalIsOpen}
        onRequestClose={this.props.closeCreateModal}
      >
        <div className="example-header">
          <h1>{this.props.header}</h1>
          <button
            className="example-cancel"
            onClick={this.props.closeCreateModal}
          >
            X
          </button>
        </div>
        <div className="example-body">
          <form>
            <input
              type="text"
              id="example-text"
              name="fname"
              placeholder="Enter A Title"
              value={this.props.value}
            ></input>
            <textarea
              value={this.props.value}
              onChange={this.props.createExample}
              id="example-textarea"
            >
              {/* {this.props.values} */}
            </textarea>
            <div className="example-buttons">
              <Button
                id="create-button"
                className="examples-header-button-right"
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "#F3E63F" }}
                onClick={this.props.createExample}
              >
                <label className="create-button">{this.props.buttonText}</label>
              </Button>
              <Button
                id="create-button"
                className="examples-header-button-right"
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#FF6584"
                }}
                onClick={() => this.props.closeCreateModal}
              >
                <label className="create-button">Go Back</label>
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default CustomModal;
