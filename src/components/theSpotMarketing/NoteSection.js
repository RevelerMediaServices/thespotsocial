import React, { Component } from "react";
import _ from "lodash";

export class NoteSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      note: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentDidMount() {
    this.props.getNotes();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      date: this.state.date,
      note: this.state.note,
      uid: this.props.user.uid,
      spotID: this.props.spotID
    };
    this.props.addNotes(note);
    this.setState({
      date: "",
      note: ""
    });
  }

  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <div key={key}>
          {this.props.spotID === note.spotID ? (
            <div>
              <h2>{note.date}</h2>
              <p>{note.note}</p>
              <button onClick={() => this.props.deleteNote(key)}>
                Delete Note
              </button>
            </div>
          ) : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="notesBox">
        <form onSubmit={this.handleSubmit}>
          <input
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
            type="date"
            placeholder="DAte of Note"
          />
          <textarea
            name="note"
            onChange={this.handleChange}
            value={this.state.note}
            type="textarea"
            placeholder="Body of Note"
          />
          <button type="submit">Add Note</button>
        </form>
        {this.renderNotes()}
      </div>
    );
  }
}

export default NoteSection;
