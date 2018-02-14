import _ from "lodash";
import React, { Component } from "react";
import { postData, editData } from "../../actions/postdata";
import { getDetail } from "../../../userdetail/actions/getdetaildata";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderTextField, renderSelect, RadioSelectValueField } from "../form";
import { technology, designation, sex } from "../../../../constant";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataval: null,
      firstname: null,
      isedit: false,
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.setState({
        isedit: true,
      });
    }
    this.props.getDetail(this.props.match.params.id);
  }


  componentWillReceiveProps(nextProps, props) {
    if (nextProps.savedData) {
      this.setState({
        dataval: nextProps.savedData.postdata,
      });
    }
  }

  onSubmit = (event) => {
    if (this.state.isedit) {
      this.props.editData(event);
    }
    else {
      this.props.postData(event);
    }
  }

  editData = (cell, row, rowIndex) => {
    return (<Link to={`/edit-user/${row.id}`}> Edit </Link>);
  }

  detailData = (cell, row, rowIndex) => {
    return (<Link to={`/user/${row.id}`}> Detail </Link>);
  }

  getDesignation = (cell, row, rowIndex) => {
    return (_.filter(designation, { "value": row.designation })[0] ? _.filter(designation, { "value": row.designation })[0].label : "");
  }

  getTechnology = (cell, row, rowIndex) => {
    return (_.filter(technology, { "value": row.technology })[0] ? _.filter(technology, { "value": row.technology })[0].label : "");
  }

  getSex = (cell, row, rowIndex) => {
    return (_.filter(sex, { "value": row.sex })[0] ? _.filter(sex, { "value": row.sex })[0].label : "");
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
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
    }];
    return (
      <div>


        {this.state.dataval ?
          <BootstrapTable keyField='id' pagination={paginationFactory()}
            data={this.state.dataval} columns={columns}
          />
          :
          <div>
            <center><h2> {this.state.isedit ? "Edit User" : "Add user"} </h2></center>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">
              <div className="form-body">
                <Field
                  name="name"
                  component={renderTextField}
                  label="Name"
                  placeholder="Enter your Name"
                />
                <Field
                  name="designation"
                  component={renderSelect}
                  label="Designation"
                  options={designation}
                />
                <Field
                  name="technology"
                  component={renderSelect}
                  label="Technology"
                  options={technology}
                />
                <Field
                  name="sex"
                  component={RadioSelectValueField}
                  label="Sex"
                  data={sex}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block"> {this.state.isedit ? "Edit" : "Add"} </button>
            </form>
          </div>
        }
        <Link to="/users"> {this.state.isedit ? "Back to list" : "Go to list"} </Link>
      </div>

    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    savedData: state.postdata,
    vallength: state.postdata ? state.postdata.postdata ? state.postdata.postdata.length : "" : "",
    loading: state.postdata.isLoading,
    initialValues: state.getdetail ? state.getdetail.detaildata : "",
  };
}

AddUser = reduxForm({
  form: "add_user",
  // validate,
})(AddUser);

export default connect(mapStateToProps, { postData, getDetail, editData })(AddUser);
