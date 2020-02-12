import React, { useState } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { BG_COLOR } from "../constants/Colors";
import ImageButton from "./ImageButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { drinkActionCreator } from "../redux/actions/drinkActions";
import uuidv1 from "uuid/v1";
import { FontAwesome } from "@expo/vector-icons";
import Layout from "../constants/Layout";

const textSize = Layout.defaultFontSize;

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
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  padding: 20px;
  align-self: center;
  color: ${BG_COLOR};
  font-size: ${textSize};
  font-weight: 200;
`;

const EditText = styled.TextInput`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${BG_COLOR};
  font-size: ${textSize};
  font-weight: 200;
`;

const DrinkButton = ({
  id,
  name,
  amount,
  degree,
  color = "white",
  addDrink,
  editDrink,
  removeDrink
}) => {
  const [editMode, setEdit] = useState(false);
  const [newName, setName] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDegree, setDegree] = useState("");

  const _onInput = () => {
    if (editMode) setEdit(false);
    else setEdit(true);
  };

  const _onUpdateName = changedText => {
    setName(changedText);
  };
  const _onUpdateAmount = changedText => {
    setAmount(changedText);
  };
  const _onUpdateDegree = changedText => {
    setDegree(changedText);
  };

  const _onCancle = () => {
    setEdit(false);
  };

  const _onSave = () => {
    if (newName !== "" && newAmount !== "" && newDegree !== "") {
      if (id === "new") {
        addDrink(uuidv1(), newName, newAmount, newDegree);
      } else {
        editDrink(id, newName, newAmount, newDegree);
      }
    }
    setEdit(false);
  };

  const _onDelete = () => {
    removeDrink(id);
    setEdit(false);
  };

  return (
    <TouchableOpacity onPressOut={_onInput}>
      <ButtonContainer color={color}>
        {editMode ? (
          <InputContainer>
            <EditText
              placeholder={name}
              autoFocus={true}
              autoCorrect={false}
              onChangeText={changedText => _onUpdateName(changedText)}
            />
            <EditText
              placeholder={`1잔${amount}ml`}
              autoFocus={false}
              autoCorrect={false}
              onChangeText={changedText => _onUpdateAmount(changedText)}
            />
            <EditText
              placeholder={`${degree}%`}
              autoFocus={false}
              autoCorrect={false}
              onChangeText={changedText => _onUpdateDegree(changedText)}
            />
            <FuntionContainer>
              <TouchableOpacity onPressOut={_onSave}>
                <FontAwesome name={"check-circle"} size={40} color={"green"} />
              </TouchableOpacity>
              {id !== "new" ? (
                <TouchableOpacity onPressOut={_onDelete}>
                  <FontAwesome name={"times-circle"} size={40} color={"red"} />
                </TouchableOpacity>
              ) : null}
            </FuntionContainer>
          </InputContainer>
        ) : (
          <>
            <ButtonText>{name}</ButtonText>
            {id !== "new" ? <ButtonText>{degree}%</ButtonText> : null}
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
