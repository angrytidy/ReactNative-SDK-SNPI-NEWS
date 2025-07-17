import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginComponent from "./components";

// Injectors
import injectLocales from "utils/injectLocales";

// redux action
import * as actions from "modules/Auth/actions";

// import locales
import fr from "../../locales/fr";

const Login = (props) => {
  injectLocales({ fr });
  return <LoginComponent {...props} />;
};

const mapStateToProps = ({ auth, global }) => ({
  auth,
  // oneSignalPlayerId: global.oneSignalPlayerId,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
