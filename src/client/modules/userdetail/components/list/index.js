import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDetail } from "../../actions/getdetaildata";
class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
    };
  }

  componentWillMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.detaildata) {
      this.setState({
        details: nextProps.detaildata,
      });
    }
  }

  render() {
    return (
      <div>
        <center><h1> User Detail </h1></center>
        {this.state.details &&
          <div>
            Name : {this.state.details.name}
            <br />
            Designation : {this.state.details.designation}
            <br />
            Technology: {this.state.details.technology}
            <br />
            Sex: {this.state.details.sex}
          </div>
        }
        <Link to="/list"> GO to listing </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    detaildata: state.getdetail ? state.getdetail.detaildata : "",
    datais: state.getdetail,
  };
}
export default connect(mapStateToProps, { getDetail })(UserDetail);

