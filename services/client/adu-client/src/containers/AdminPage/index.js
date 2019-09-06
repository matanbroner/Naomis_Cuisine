import React from "react";
import localStyles from "./styles.module.css";

import Condition from "../../components/Condition";
import AdminSidebar from "../../components/AdminSidebar";
import ActivityPanel from '../AdminPanels/ActivityPanel'
import QuoteCreationPanel from '../AdminPanels/QuoteCreationPanel'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";

import roles from "../../constants/Roles";
import { connect } from "react-redux";

class AdminPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tab: null
    };
  }

  content() {
    return (
        <div id={localStyles.test}>Hello</div>
    )
  }

  renderRoutes() {
    return (
      <React.Fragment>
        <Route
          path={`${this.props.match.path}/activity`}
          component={ActivityPanel}
        />
        <Route
          path={`${this.props.match.path}/quote/create`}
          component={QuoteCreationPanel}
        />
        
      </React.Fragment>
    );
  }

  render() {
      console.log(this.props.match.path)
    return (
        <React.Fragment>
            <AdminSidebar>
                <div id={localStyles.wrapper}>
                    {this.renderRoutes()}
                </div>
            </AdminSidebar>
        </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
