import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/fetchdata";
import { Link } from "react-router-dom";
import { designation, technology, sex } from "../../../../constant";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
// import Fancy from 'react-fancy-component';


class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataval: null,
      response: null,
    };
  }

componentDidMount(){
  fetch("http://localhost:5000/api/getData")
    .then(response => response.json())
    .then(data => this.setState({ response: data }));
}

  componentWillMount() {
    this.props.fetchData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        dataval: nextProps.data,
      });
    }
  }

  editData = (cell, row, rowIndex) => {
    return (<Link to = {`/edit-user/${row.id}`}> Edit </Link>);
  }

  detailData = (cell, row, rowIndex) => {
    return (<Link to = {`/user/${row._id}`}> Detail </Link>);
  }

  getDesignation = (cell, row, rowIndex) => {
    return (_.filter(designation,  {  "value": row.designation })[0] ? _.filter(designation,  {  "value": row.designation })[0].label : "");
  }

  getTechnology = (cell, row, rowIndex) => {
    return (_.filter(technology,  {  "value": row.technology })[0] ? _.filter(technology,  {  "value": row.technology })[0].label : "");
  }

  getSex = (cell, row, rowIndex) => {
    return (_.filter(sex,  {  "value": row.sex })[0] ? _.filter(sex,  {  "value": row.sex })[0].label : "");
  }

  gotoProduct = (cell,row,rowIndex) => {
    return (<Link to = {`/product`}> Go to product </Link>);
  }

  render() {
    const columns = [{
      dataField: "name",
      text: "Name",
    }, {
      dataField: "designation",
      text: "Designation",
      formatter: this.getDesignation,
    }, {
      dataField: "technology",
      text: "Technology",
      formatter: this.getTechnology,
    }, {
      dataField: "sex",
      text: "Sex",
      formatter: this.getSex,
    }, {
      dataField: "",
      text: "",
      formatter: this.editData,
    }, {
      dataField: "",
      text: "",
      formatter: this.detailData,
    }, {
      dataField: "",
      text: "",
      formatter: this.gotoProduct,
    }];
    return (
      <div>{console.log("value in respondse >> ",this.state.response)}
        <center> <h3> List of Users </h3> </center>
        {this.state.dataval ?
          <BootstrapTable keyField='id' pagination={paginationFactory()}
            data={this.state.dataval} columns={columns}
          />
          : ""
        }
        <Link to = "/add-user"> Add User </Link>
      </div>

    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    data: state.fetchdata.getdata,
  };
}

// Declaration = reduxForm({
//     form: "edit_account_declaration",
//     // validate,
// })(Declaration);

export default connect(mapStateToProps, { fetchData })(ListUsers);
