import React from "react";
import ResetPasswordComponent from "./components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// redux action
import * as actions from "modules/Auth/actions";



const ResetPassword = (props) => {
  return <ResetPasswordComponent {...props} />;
};

const mapStateToProps = ({ auth, global }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
