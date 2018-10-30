import { GET_NOTES, NOTES_STATUS } from "../actionTypes";
import { database } from "../firebase";

export function getNotes() {
  return dispatch => {
    dispatch({
      type: NOTES_STATUS,
      payload: true
    });
    database.ref("barNotes").on("value", snapshot => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val()
      });
      dispatch({
        type: NOTES_STATUS,
        payload: false
      });
    });
  };
}

export function addNotes(note) {
  return dispatch => database.ref("barNotes").push(note);
}

export function deleteNote(id) {
  return dispatch =>
    database
      .ref("barNotes")
      .child(id)
      .remove();
}
