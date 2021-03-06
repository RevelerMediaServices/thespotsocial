import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  getComments,
  addComments,
  deleteComment
} from "../actions/commentsAction";

export class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    this.props.getComments();
    console.log(this.props.comments);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid
    };
    this.props.addComments(comment);
    this.setState({
      title: "",
      body: ""
    });
  }

  renderComments() {
    return _.map(this.props.comments, (comment, key) => {
      return (
        <div key={key}>
          {this.props.user.uid === comment.uid ? (
            <div>
              <h2>{comment.title}</h2>
              <p>{comment.body}</p>
              <button onClick={() => this.props.deleteComment(key)}>
                Delete Comment
              </button>
            </div>
          ) : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="commentsBox">
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
            placeholder="Title of Comment"
          />
          <textarea
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            type="textarea"
            placeholder="Boddy of Comment"
          />
          <button type="submit">Add Comment</button>
        </form>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    comments: state.comments,
    user: state.user
  };
};

const mapDispatchToProps = {
  getComments,
  addComments,
  deleteComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);
