import { GET_SPOTS, SPOTS_STATUS } from "../actionTypes";
import { database } from "../firebase";

export function getSpots() {
  return dispatch => {
    dispatch({
      type: SPOTS_STATUS,
      payload: true
    });
    database.ref("spots").on("value", snapshot => {
      dispatch({
        type: GET_SPOTS,
        payload: snapshot.val()
      });
      dispatch({
        type: SPOTS_STATUS,
        payload: false
      });
    });
  };
}

export function addSpot(spot) {
  return dispatch => database.ref("spots").push(spot);
}
