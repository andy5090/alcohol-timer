import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import MsgButton from "../../components/MsgButton";
import Layout from "../../constants/Layout";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const iosPadding = Layout.defaultFontSize * 4.5;

const OuterContainer = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const EmptyView = styled.View`
  height: ${iosPadding}px;
`;

const ScrollContainer = styled.ScrollView`
  padding-left: 2px;
  padding-right: 2px;
`;

const AlarmMsgsPresenter = ({ loaded, messages, currentEdit, noticeEdit }) => {
  return loaded ? (
    <Loader />
  ) : (
    <OuterContainer>
      <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollContainer>
          {messages.map(message => (
            <MsgButton
              key={message.id}
              id={message.id}
              text={message.text}
              isEditing={currentEdit === message.id ? true : false}
              noticeEdit={noticeEdit}
            />
          ))}
          <MsgButton
            key={"add_new"}
            id={"new"}
            text={"+ 알림 매세지 추가"}
            isEditing={currentEdit === "new" ? true : false}
            noticeEdit={noticeEdit}
            color={"#dfe6e9"}
          />
          {Platform.OS === "ios" ? <EmptyView></EmptyView> : null}
        </ScrollContainer>
      </KeyboardAvoidingView>
    </OuterContainer>
  );
};

AlarmMsgsPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default AlarmMsgsPresenter;
