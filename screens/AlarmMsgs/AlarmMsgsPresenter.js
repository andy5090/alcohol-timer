import React, { useState } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import TextButton from "../../components/TextButton";
import Dialog from "react-native-dialog";
import uuidv1 from "uuid/v1";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const AlarmMsgsPresenter = ({
  loaded,
  addMessage,
  editMessage,
  removeMessage,
  removeAllMessages,
  messages
}) => {
  const [dialogVisible, setVisible] = useState({
    visible: false,
    id: null,
    text: null,
    label: null
  });

  return loaded ? (
    <Loader />
  ) : (
    <Container>
      {messages.map((message, index) => (
        <TextButton
          key={message.id}
          name={message.text}
          onPress={() => {
            setVisible({
              visible: true,
              id: message.id,
              text: message.text,
              label: "Edit Message"
            });
          }}
        />
      ))}
      <TextButton
        key="addMsg"
        name="Add Message"
        onPress={() => {
          setVisible({
            visible: true,
            id: null,
            text: "New Message",
            label: "Add Message"
          });
        }}
      />
      <Dialog.Container visible={dialogVisible.visible}>
        <Dialog.Input
          label={dialogVisible.label}
          placeholder={dialogVisible.text}
          onSubmitEditing={event => {
            if (
              event.nativeEvent.text !== "" &&
              event.nativeEvent.text !== null
            ) {
              if (dialogVisible.id !== null) {
                editMessage(dialogVisible.id, event.nativeEvent.text);
              } else {
                addMessage(uuidv1(), event.nativeEvent.text);
              }
            }
            setVisible({ visible: false, id: null, text: null });
          }}
        />
      </Dialog.Container>
    </Container>
  );
};

AlarmMsgsPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default AlarmMsgsPresenter;
