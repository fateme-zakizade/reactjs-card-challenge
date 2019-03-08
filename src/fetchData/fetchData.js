import {fetchProductsBegin,fetchProductsSuccess,fetchProductsFailure} from "../action/mainAction"
import axios from 'axios';
export function fetchData() {
    return dispatch => {
      dispatch(fetchProductsBegin());

    return axios.get('http://static.pushe.co/challenge/json')
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
      });
    };
  }
  