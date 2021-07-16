import React, { Component } from "react";
import Menu from "../components/Menu/Menu";
import SideDrawer from "../components/Menu/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  toggleClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <div>
        <Menu drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.toggleClosedHandler}
        />
      </div>
    );
  }
}

export default Layout;
