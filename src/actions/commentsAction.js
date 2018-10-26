import { GET_COMMENTS, COMMENTS_STATUS } from "../actionTypes";
import { database } from "../firebase";

export function getComments() {
  return dispatch => {
    dispatch({
      type: COMMENTS_STATUS,
      payload: true
    });
    database.ref("Comments").on("value", snapshot => {
      dispatch({
        type: GET_COMMENTS,
        payload: snapshot.val()
      });
      dispatch({
        type: COMMENTS_STATUS,
        payload: false
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
