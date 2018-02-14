import React, { Component } from "react";
// import Fancy from 'react-fancy-component';
import {Link} from"react-router-dom";

class ListProducts extends Component {
  render(){
    return(
      <div>
        <Link to ="/"> Back to List users </Link>
      {/*<Fancy/>*/}
      </div>
    )
  }
}

export default ListProducts