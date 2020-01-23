import React, { useState, useEffect } from "react";
import { AsyncStorage, StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { messageActionCreator } from "./redux/actions/messageActions";
import uuidv1 from "uuid/v1";

const MsgLoading = ({ addMessage, removeAllMessages, messages }) => {
  const [firstRunChecked, setChecked] = useState(false);

  useEffect(() => {
    const checkFirstRun = async () => {
      try {
        const value = await AsyncStorage.getItem("alreadyLaunched");
        if (value === null && !firstRunChecked) {
          removeAllMessages();

          addMessage(uuidv1(), "It's time to go home!");
          addMessage(uuidv1(), "Your liver is crying!");
          addMessage(uuidv1(), "Your life gauge has 10%");
          addMessage(uuidv1(), "Alcohol full! Leave now!");
          addMessage(uuidv1(), "Your wife is waiting!");
          setChecked(true);
          await AsyncStorage.setItem(
            "alreadyLaunched",
            "Default Messages are set"
          );
          console.log("FirstRun");
        } else {
          setChecked(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkFirstRun();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <MainNavigation></MainNavigation>
    </>
  );
};

const mapStateToProps = state => {
  return { messages: state.messageReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: bindActionCreators(messageActionCreator.addMessage, dispatch),
    removeAllMessages: bindActionCreators(
      messageActionCreator.removeAllMessages,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgLoading);
