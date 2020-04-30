<<<<<<< HEAD
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure/index.js";
import NoDataView from "../common/NoDataView/index.js";

@inject("userStore")
@observer
class UserPage extends Component {
=======
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';

@inject('userStore')
@observer
class UserPage extends Component {

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
  componentDidMount() {
    this.doNetworkCalls();
  }

  doNetworkCalls = () => {
<<<<<<< HEAD
    const { userStore } = this.props;
    userStore.getUsersAPI();
  };

  renderUserList = () => {
=======

    const { userStore } = this.props;
    userStore.getUsersAPI();

  }

  renderUserList = () => {

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
    const { userStore } = this.props;
    const { users } = userStore;
    if (users.length === 0) {
      return <NoDataView/>;
    }
    return users.map((userName) => <div>{userName}</div>);
<<<<<<< HEAD
  };
=======

  }
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d

  render() {
    const { userStore } = this.props;
    const { getUsersApiStatus, getUsersApiError } = userStore;

    return (

      <LoadingWrapperWithFailure
<<<<<<< HEAD
        apiError={getUsersApiError}
        apiStatus={getUsersApiStatus}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI={this.renderUserList}
      />
=======
                apiError={getUsersApiError}
                apiStatus={getUsersApiStatus}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUserList}/>
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
    );
  }
}

export default UserPage;
