import React from "react";
import UserPresenter from "./UserPresenter";

export default class UserContainer extends React.Component {
  state = {
    loading: true,
    error: null
  };

  render() {
    const { loading } = this.state;
    return <UserPresenter loading={loading} />;
  }
}
