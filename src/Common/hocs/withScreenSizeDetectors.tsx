import React from "react";
import { observer } from "mobx-react";
import { observable, computed, action } from "mobx";

const withScreenSizeDetectors = (WrappedComponent) => {
  @observer
  class newComponent extends React.Component {
    @observable screenSize: number = window.innerWidth;
    componentDidMount() {
      window.addEventListener("resize", this.onResize);
    }

    @action.bound
    onResize() {
      this.screenSize = window.innerWidth;
    }
    @computed
    get isMobile() {
      return this.screenSize < 576;
    }
    @computed
    get isTablet() {
      return this.screenSize >= 576 && this.screenSize < 992;
    }
    @computed
    get isDesktop() {
      return this.screenSize >= 992;
    }
    render() {
      return (
        <WrappedComponent
          isMobile={this.isMobile}
          isTablet={this.isTablet}
          isDesktop={this.isDesktop}
        />
      );
    }
  }
  return newComponent;
};
export default withScreenSizeDetectors;
