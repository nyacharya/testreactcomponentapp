import { GETDETAIL, POSTDATA } from "./constant";
import _ from "lodash";
import { data } from "../../../constant";

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

export function editData(prop) {
  var index = _.findIndex(data, { id: prop.id });
  data.splice(index, 1, prop);
  return function(dispatch) {
    dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
    dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, data));
  };
}

export function postData(prop) {
  let temp = prop;
  prop = {
    id: data.length,
    name: temp.name,
    technology: temp.technology,
    designation: temp.designation,
    sex: temp.sex,
  },
  data.push(prop);
  return function(dispatch) {
    dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
    dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, data));
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


// export function postdatas(data){
//   console.log("value inside postdata ",data)
// //   fetch("http://localhost:5000/api/insertData",
// // {
// //     method: "POST",
// //     body: data
// // })
// // .then(function(res){ return res.json(); })
// // .then(function(data){ alert( JSON.stringify( data ) ) })
// }

export function postdatas(data) {
  console.log("value inside postdata ",data)

  // return (dispatch) => {
    // console.log('errorMessageCustom', errorMessageCustom)
    // dispatch(actionCreator(loginActionTypes.post_login.REQUEST));
    // fetch(`http://localhost:5000/api/insertData`, {
    //   method: 'post',
    //   body: JSON.stringify(data),
    //   headers: jsonApiHeader(null, 'application/json'),
    // })
    //   .then(checkHttpStatus)
    //   .then(function(response) {
    //     console.log('Login response: ', response);

    //   })}

    return function(dispatch){
       fetch("http://localhost:5000/api/insertData",
  {
      method: "POST",
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(function(res){
    console.log("Respond... ",res)
    dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
    dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, res));
  })
}



  // let temp = prop;
  // prop = {
  //   id: data.length,
  //   name: temp.name,
  //   technology: temp.technology,
  //   designation: temp.designation,
  //   sex: temp.sex,
  // },
  // data.push(prop);
  // return function(dispatch) {
  //   dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
  //   dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, data));
  // };
}