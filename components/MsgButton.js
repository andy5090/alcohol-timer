import React, { useState, useRef } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { BG_COLOR, GREY_COLOR } from "../constants/Colors";
import ImageButton from "./ImageButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { messageActionCreator } from "../redux/actions/messageActions";
import uuidv1 from "uuid/v1";
import { FontAwesome } from "@expo/vector-icons";
import Layout from "../constants/Layout";

const textSize = Layout.defaultFontSize / 1.2;
const paddingGap = Layout.defaultFontSize / 1.5;
const smallButtonSize = Layout.defaultFontSize;
const buttonSize = Layout.defaultFontSize * 1.5;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.color};
  border-radius: 10px;
  margin: 1px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FuntionContainer = styled.View`
  padding-left: ${paddingGap};
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  padding: 20px;
  align-self: center;
  color: ${BG_COLOR};
  font-size: ${textSize};
`;

const EditText = styled.TextInput`
  padding: 20px;
  color: ${BG_COLOR};
  font-size: ${textSize};
`;

const MsgButton = ({
  id,
  text,
  color = "white",
  addMessage,
  editMessage,
  removeMessage
}) => {
  const [editMode, setEdit] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [newText, setText] = useState("");

  const editInput = useRef(null);

  const _onInput = () => {
    if (editMode) setEdit(false);
    else setEdit(true);
  };

  const _onUpdate = changedText => {
    setText(changedText);
  };

  const _onReset = () => {
    setText("");
    editInput.current.clear();
    editInput.current.focus();
  };

  const _onCancle = () => {
    setEdit(false);
  };

  const _onSave = () => {
    if (newText !== "") {
      if (id === "new") {
        addMessage(uuidv1(), newText);
      } else {
        editMessage(id, newText);
      }
    }
    setEdit(false);
  };

  const _onDelete = () => {
    removeMessage(id);
    setEdit(false);
  };

  return (
    <TouchableOpacity onPressOut={_onInput}>
      <ButtonContainer color={color}>
        {editMode ? (
          <InputContainer>
            <EditText
              ref={editInput}
              placeholder={text}
              autoFocus={true}
              autoCorrect={false}
              onSubmitEditing={_onSave}
              onChangeText={changedText => _onUpdate(changedText)}
            />
            <TouchableOpacity onPressOut={_onReset}>
              <FontAwesome
                name={"remove"}
                size={smallButtonSize}
                color={GREY_COLOR}
              />
            </TouchableOpacity>
            <FuntionContainer>
              <TouchableOpacity onPressOut={_onSave}>
                <FontAwesome
                  name={"check-circle"}
                  size={buttonSize}
                  color={"green"}
                />
              </TouchableOpacity>
            </FuntionContainer>
          </InputContainer>
        ) : (
          <ButtonText>{text}</ButtonText>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};

MsgButton.propTypes = {
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return { messages: state.messageReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: bindActionCreators(messageActionCreator.addMessage, dispatch),
    editMessage: bindActionCreators(messageActionCreator.editMessage, dispatch),
    removeMessage: bindActionCreators(
      messageActionCreator.removeMessage,
      dispatch
    ),
    removeAllMessages: bindActionCreators(
      messageActionCreator.removeAllMessages,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgButton);
