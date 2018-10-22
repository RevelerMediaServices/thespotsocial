import { GET_COMMENTS } from "../actionTypes";
import { database } from "../firebase";

export function getComments() {
  return dispatch => {
    database.ref("Comments").on("value", snapshot => {
      dispatch({
        type: GET_COMMENTS,
        payload: snapshot.val()
      });
    });
  };
}

export function addComments(comment) {
  return dispatch => database.ref("Comments").push(comment);
}

export function deleteComment(id) {
  return dispatch =>
    database
      .ref("Comments")
      .child(id)
      .remove();
}
