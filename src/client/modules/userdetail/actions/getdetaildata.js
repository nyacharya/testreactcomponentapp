import _ from "lodash";
import { data } from "../../../constant";
import { GETDETAIL } from "./constant";

export function getSuccess(SUCCESS, data) {
  return {
    type: SUCCESS,
    payload: data,
  };
}

export function getFailure(FAILURE, error) {
  return {
    type: FAILURE,
    payload: error,
  };
}

export function getReset(RESET) {
  return {
    type: RESET,
    payload: null,
  };
}

export function getsingledata(id) {
  let idd = parseInt(id);
  return _.filter(data,  {  "id": idd })[0];
}

export function getDetail(id) {
  return function(dispatch) {
    let aa = getsingledata(id);
    dispatch(getSuccess(GETDETAIL.GET_DATA_SUCCESS, aa));
  };
};

export function getDetailApi(id) {
  return function(dispatch) {
    fetch(`http://localhost:5000/api/getDetail/${id}`)
    .then(response => response.json())
    .then(data => dispatch(getSuccess(GETDETAIL.GET_DATA_SUCCESS, data)));
    // dispatch(getSuccess(FETCHDATA.GET_DATA_RESET))
  };
};
