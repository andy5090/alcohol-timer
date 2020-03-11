import React, { useState, useRef } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import uuidv1 from "uuid/v1";
import { BG_COLOR, GREY_COLOR, ALERT_COLOR } from "../constants/Colors";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { drinkActionCreator } from "../redux/actions/drinkActions";
import { FontAwesome } from "@expo/vector-icons";
import Layout from "../constants/Layout";

const textSize = Layout.defaultFontSize / 1.2;
const paddingGap = Layout.defaultFontSize / 1.5;
const smallButtonSize = Layout.defaultFontSize;
const buttonSize = Layout.defaultFontSize * 1.7;

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
  padding-right: ${paddingGap};
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  padding: ${textSize}px;
  color: ${BG_COLOR};
  font-family: "OpenSans-Regular";
  font-size: ${textSize};
`;

const EditText = styled.TextInput`
  padding-top: ${textSize}px;
  padding-bottom: ${textSize}px;
  padding-left: ${textSize}px;
  color: ${BG_COLOR};
  font-family: "OpenSans-Regular";
  font-size: ${textSize};
`;

const DrinkButton = ({
  id,
  name,
  amount,
  degree,
  color = "white",
  addDrink,
  editDrink,
  removeDrink,
  noticeEdit,
  isEditing
}) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [newName, setName] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDegree, setDegree] = useState("");

  const editInput1 = useRef(null);
  const editInput2 = useRef(null);
  const editInput3 = useRef(null);

  const _onUpdateName = changedText => {
    setName(changedText);
  };
  const _onUpdateAmount = changedText => {
    setAmount(changedText);
  };
  const _onUpdateDegree = changedText => {
    setDegree(changedText);
  };

  const _onReset = () => {
    setName("");
    setAmount("");
    setDegree("");
    editInput1.current.clear();
    editInput2.current.clear();
    editInput3.current.clear();
    editInput1.current.focus();
  };

  const _onSave = () => {
    if (newName !== "" && newAmount !== "" && newDegree !== "") {
      if (id === "new") {
        addDrink(uuidv1(), newName, newAmount, newDegree);
      } else {
        editDrink(id, newName, newAmount, newDegree);
      }
    }
    noticeEdit("done");
  };

  const _onDelete = () => {
    removeDrink(id);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        noticeEdit(id);
        if (deleteMode) setDeleteMode(false);
      }}
      onLongPress={() => {
        setDeleteMode(true);
        noticeEdit("none");
      }}
    >
      <ButtonContainer color={color}>
        {isEditing ? (
          <InputContainer>
            <EditText
              ref={editInput1}
              placeholder={name}
              autoFocus={true}
              autoCorrect={false}
              onSubmitEditing={() => {
                setName(name);
                editInput2.current.focus();
              }}
              style={{ width: textSize * 5 }}
              onChangeText={changedText => _onUpdateName(changedText)}
            />
            <EditText
              ref={editInput2}
              keyboardType={"number-pad"}
              placeholder={`${amount}ml`}
              autoFocus={false}
              autoCorrect={false}
              onSubmitEditing={() => {
                setAmount(amount);
                editInput3.current.focus();
              }}
              style={{ width: amount.length * textSize * 1.5 }}
              onChangeText={changedText => _onUpdateAmount(changedText)}
            />
            <EditText
              ref={editInput3}
              keyboardType={"number-pad"}
              placeholder={`${degree}%`}
              autoFocus={false}
              autoCorrect={false}
              onSubmitEditing={_onSave}
              style={{ width: amount.length * textSize * 1.2 }}
              onChangeText={changedText => _onUpdateDegree(changedText)}
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
                  color={"#009432"}
                />
              </TouchableOpacity>
            </FuntionContainer>
          </InputContainer>
        ) : (
          <>
            {deleteMode ? (
              <InputContainer>
                <ButtonText>{name}</ButtonText>
                {id !== "new" ? <ButtonText>{degree}%</ButtonText> : null}
                <TouchableOpacity onPressOut={_onDelete}>
                  <FontAwesome
                    name={"trash"}
                    size={buttonSize}
                    color={ALERT_COLOR}
                  />
                </TouchableOpacity>
              </InputContainer>
            ) : (
              <>
                <ButtonText>{name}</ButtonText>
                {id !== "new" ? <ButtonText>{degree}%</ButtonText> : null}
              </>
            )}
          </>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};

DrinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return { drinks: state.drinkReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    addDrink: bindActionCreators(drinkActionCreator.addDrink, dispatch),
    editDrink: bindActionCreators(drinkActionCreator.editDrink, dispatch),
    removeDrink: bindActionCreators(drinkActionCreator.removeDrink, dispatch),
    removeAllDrinks: bindActionCreators(
      drinkActionCreator.removeAllDrinks,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkButton);
