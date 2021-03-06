<Modal
  isOpen={this.state.editModalIsOpen}
  onRequestClose={() => this.closeEditModal()}
>
  <div className="example-header">
    <h1>Edit or Change Example</h1>
    <button className="example-cancel" onClick={() => this.closeEditModal()}>
      X
    </button>
  </div>
  <div className="example-body">
    <form>
      <input type="text" id="example-text" name="fname"></input>
      <textarea id="example-textarea"> Test</textarea>
      <div className="example-buttons">
        <Button
          id="create-button"
          className="examples-header-button-right"
          variant="contained"
          color="secondary"
          style={{ backgroundColor: "#F3E63F" }}
          onClick={() => this.openEditModal()}
        >
          <label className="create-button">Confirm Edits</label>
        </Button>
        <Button
          id="create-button"
          className="examples-header-button-right"
          variant="contained"
          color="secondary"
          style={{
            backgroundColor: "#FF6584"
          }}
          onClick={() => this.closeEditModal()}
        >
          <label className="create-button">Go Back</label>
        </Button>
      </div>
    </form>
  </div>
</Modal>;
