import {editData} from "../action/mainAction"
export function editDataFunction(data) {
    return dispatch => {
      dispatch(editData(data));
    }
  }
  