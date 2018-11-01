import React, { Component } from "react";
import _ from "lodash";

import { Container, Form, Input, Button, Table } from "reactstrap";

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
        <tbody key={key}>
          {this.props.spotID === note.spotID ? (
            <tr>
              <td>{note.date}</td>
              <td>{note.note}</td>
              <td>
                <button onClick={() => this.props.deleteNote(key)}>
                  Delete
                </button>
              </td>
            </tr>
          ) : null}
        </tbody>
      );
    });
  }

  render() {
    return (
      <Container className="notesBox">
        <Form id="notesForm" onSubmit={this.handleSubmit}>
          <Input
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
            type="date"
            className="noteInputs"
            bsSize="lg"
          />
          <Input
            name="note"
            onChange={this.handleChange}
            value={this.state.note}
            type="textarea"
            placeholder="Body of Note"
            className="noteInputs"
          />
          <Button type="submit" className="noteInputs">
            Add Note
          </Button>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Note</th>
            </tr>
          </thead>
          {this.renderNotes()}
        </Table>
      </Container>
    );
  }
}

export default NoteSection;
