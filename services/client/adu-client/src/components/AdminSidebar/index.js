import React from "react";
import localStyles from "./styles.module.css";

import Sidebar from "react-sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPowerOff, faCog, faCompass } from '@fortawesome/free-solid-svg-icons'

import links  from './links.js'

class AdminSidebar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      windowWidth: 1200
    };
  }

  componentDidMount() {
    this.setWidthListener();
  }

  setWidthListener() {
    this.setState({ windowWidth: window.innerWidth });
    if (window.attachEvent) {
      window.attachEvent(
        "onresize",
        function() {
          this.setState({ windowWidth: window.innerWidth });
        }.bind(this)
      );
    } else if (window.addEventListener) {
      window.addEventListener(
        "resize",
        function() {
          this.setState({ windowWidth: window.innerWidth });
        }.bind(this),
        true
      );
    }
  }

  sidebarStyles() {
    return {
      sidebar: {
        background: "rgb(67, 150, 97)",
        marginTop: "100px",
        width: "256px"
      }
    };
  }

  isMobileScreen() {
    return this.state.windowWidth <= 800;
  }

  toggleSidebar(){
      this.setState({ open: !this.state.open })
  }

  renderPullTab(){
      return(
        <div id={localStyles.pullTab} style={{
            display: !this.isMobileScreen() ? 'none' : null
        }}
        onClick={() => this.toggleSidebar()}
        >
            <span id={localStyles.pullTabIcon}>
             <FontAwesomeIcon  icon={faCompass}/>
            </span>
        </div>
      )
  }

  renderSidebarContent() {
    return (
      <div id={localStyles.wrapper}>
        {this.renderHeader()}
        {this.renderProfile()}
        {this.renderMenuOptions()}
      </div>
    );
  }

  renderHeader(){
      return(
        <div id={localStyles.header}>
            Administration
        </div>
      )
  }

  renderProfile(){
      return(
          <div id={localStyles.profile}>
              <div id={localStyles.profilePhoto}>

              </div>
              <p id={localStyles.profileName}>Welcome, Jennifer</p>
              <p id={localStyles.profileTitle}>ADU Quote Specialist</p>
              <div id={localStyles.profileIcons}>
                <FontAwesomeIcon icon={faUser}/>
                <FontAwesomeIcon icon={faPowerOff}/>
                <FontAwesomeIcon icon={faCog}/>
              </div>
          </div>
      )
  }

  renderMenuOptions(){
    return links().map((link) => {
        return(
            <div id={link.title} className={localStyles.link}>
                <span className={localStyles.icon}><FontAwesomeIcon icon={link.icon} /></span>
                <span>{link.title}</span>
            </div>
        )
    })
  }

  render() {
    return (
      <Sidebar
        sidebar={this.renderSidebarContent()
        }
        open={this.state.open}
        onSetOpen={() => this.toggleSidebar()}
        docked={!this.isMobileScreen()}
        styles={this.sidebarStyles()}
        touch={true}
      >
        <React.Fragment>
            { this.renderPullTab()}
            {this.props.children}
        </React.Fragment>
      </Sidebar>
    );
  }
}

export default AdminSidebar;
