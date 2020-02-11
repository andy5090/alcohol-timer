import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import TextButton from "../../components/TextButton";
import Dialog from "react-native-dialog";
import MsgButton from "../../components/MsgButton";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const AlarmMsgsPresenter = ({ loaded, messages }) => {
  return loaded ? (
    <Loader />
  ) : (
    <Container>
      <KeyboardAvoidingView behavior="padding" enabled>
        {messages.map(message => (
          <MsgButton key={message.id} id={message.id} text={message.text} />
        ))}
        <MsgButton
          key={"add_new"}
          id={"new"}
          text={"+ 알림 매세지 추가"}
          color={"#dfe6e9"}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

AlarmMsgsPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default AlarmMsgsPresenter;
