import React from "react";
import "../../css/rightmenu/Examples.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "./CustomModal";
import Example from "./Example";

library.add(faPlus, faPen);

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      tempValue: [
        {
          name: "",
          description: "",
          word: "",
          gloss: "",
          translation: "",
          comment: "",
          creator: ""
        }
      ],
      selected: 0,
      value: ""
    };
    this.createElements = this.createElements.bind(this);
    this.clickHighlightExample = this.clickHighlightExample.bind(this);
    this.createExample = this.createExample.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  clickHighlightExample = (item) => {
    console.log("CLICKED EXAMPLE: ", item);
    this.setState({ selected: item.i });
    console.log("CLICKED EXAMPLE AFTER: ", item);
  };

  createElements(props) {
    var elements = [];
    console.log("PROPS; ", props);
    for (let i = 0; i < props.length; i++) {
      elements.push(
        <Example
          value={props[i]}
          i={i}
          clickHighlightExample={this.clickHighlightExample}
          selected={this.state.selected}
        />
      );
    }
    return elements;
  }

  createExample(event) {
    console.log("EVENT Target: ", event.target);
    console.log("EVENT Current: ", event.currentTarget);
    // console.log(
    //   "SAVED: ",
    //   event.currentTarget.parentNode.previousSibling.textContent
    // );
    // const text = event.currentTarget.parentNode.innerText;
    // console.log("SAVED 1: ", text);
    //this.setState({ value: "text" });
    // console.log("SAVED 2: ", this.state.value);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const emptyText =
      "Property Description: \nProperty Word: \nProperty Gloss: \nProperty Translation: '' \nProperty Comment: \nProperty Creator: ";
    return (
      <div className="examples-container">
        <div className="examples-header">
          <h1 className="examples-header-title">Examples</h1>

          <Button
            className="examples-header-button-left"
            variant="contained"
            color="secondary"
            style={{
              backgroundColor: "#FF6584",
              marginLeft: "15px",
              marginTop: "10px"
            }}
            onClick={() => this.openModal()}
          >
            <FontAwesomeIcon icon={faPen} />
            <label className="edit-button">Edit</label>
          </Button>

          <Button
            id="create-button"
            className="examples-header-button-right"
            variant="contained"
            color="secondary"
            style={{
              backgroundColor: "#FF6584",
              marginLeft: "15px",
              marginTop: "10px"
            }}
            onClick={() => this.openModal()}
          >
            <FontAwesomeIcon icon={faPlus} />
            <label className="create-button">Create</label>
          </Button>

          <CustomModal
            createModalIsOpen={this.state.modalIsOpen}
            onRequestClose={() => this.closeModal()}
            closeCreateModal={this.closeModal}
            openCreateModal={this.openModal}
            header="Create a New Example"
            buttonText="Create Example"
            values={emptyText}
            createExample={(e) => this.createExample(e)}
            value={this.state.value}
          ></CustomModal>

          <CustomModal
            createModalIsOpen={this.state.modalIsOpen}
            onRequestClose={() => this.closeModal()}
            closeCreateModal={this.closeModal}
            openCreateModal={this.openModal}
            header="Edit or Change the Example"
            buttonText="Edit Example"
            values={emptyText}
            createExample={(e) => this.createExample(e)}
            value={this.state.value}
          ></CustomModal>
        </div>

        <div className="examples-text">
          {this.createElements(this.props.examples)}
        </div>
      </div>
    );
  }
}

export default Examples;
