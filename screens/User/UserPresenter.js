import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";

const Container = styled.View``;

const UserPresenter = ({ loading }) =>
  loading ? <Loader /> : <Container></Container>;

UserPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default UserPresenter;
