import React, { Component } from "react";
import { observer } from "mobx-react";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import userStore from "../../stores/UserStore/index";
import NoDataView from "../common/NoDataView/index";

@observer
class UsersPage extends Component {
  componentDidMount() {
    this.doNetworkCalls();
  }
  doNetworkCalls = () => {
    userStore.getUsers();
  };
  rendersList = () => {
    const { users } = userStore;
    if (users.length === 0) {
      return <NoDataView />;
    }
    return users.map((userName) => <div>{userName}</div>);
  };
  render() {
    const { getUsersApiStatus, getUsersApiError } = userStore;
    return (
      <LoadingWrapperWithFailure
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUi={this.rendersList}
      />
    );
  }
}

export default UsersPage;
