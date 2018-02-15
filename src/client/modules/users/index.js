import React, { Component } from "react";
import Main from "./routers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";


const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunk
)(createStore);


class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state ={
      response: null,
    }
  }

  // componentDidMount(){
  //   fetch("http://localhost:5000/api/getData")
  //     .then(response => response.json())
  //     .then(data => this.setState({ response: data }));
  // }

  
  render() {
    // console.log("value in response  >> ",this.state.response)
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter ><Main /></BrowserRouter >
      </Provider>
    );
  }
}

export default UserModule;
