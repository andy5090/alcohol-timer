import React, { useState, useEffect } from "react";
import { AsyncStorage, StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { messageActionCreator } from "./redux/actions/messageActions";
import { counterActionCreator } from "./redux/actions/counterActions";
import { drinkActionCreator } from "./redux/actions/drinkActions";
import uuidv1 from "uuid/v1";

const Launching = ({
  addMessage,
  removeAllMessages,
  addDrink,
  removeAllDrinks
}) => {
  const [firstRunChecked, setChecked] = useState(false);

  useEffect(() => {
    const checkFirstRun = async () => {
      try {
        await AsyncStorage.getItem("alreadyLaunched", (err, result) => {
          if (err) {
            console.log(err);
          } else if (!firstRunChecked) {
            if (result === null) {
              setChecked(true);
              AsyncStorage.setItem("alreadyLaunched", "true");
              removeAllMessages();
              addMessage(uuidv1(), "집에 갈시간이야!");
              addMessage(uuidv1(), "너의 간이 울고있어!");
              addMessage(uuidv1(), "생명 게이지가 10% 남았습니다");
              addMessage(uuidv1(), "알콜만땅! 일어나자!");
              addMessage(uuidv1(), "마누라가 기다린다!");
              removeAllDrinks();
              addDrink(uuidv1(), "맥주", "500", "5");
              addDrink(uuidv1(), "소주", "50", "17");
              addDrink(uuidv1(), "위스키", "44", "40");
              addDrink(uuidv1(), "와인", "110", "14");

              console.log("FirstRun");
            } else {
              setChecked(true);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkFirstRun();
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <MainNavigation></MainNavigation>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: bindActionCreators(messageActionCreator.addMessage, dispatch),
    removeAllMessages: bindActionCreators(
      messageActionCreator.removeAllMessages,
      dispatch
    ),
    addDrink: bindActionCreators(drinkActionCreator.addDrink, dispatch),
    removeAllDrinks: bindActionCreators(
      drinkActionCreator.removeAllDrinks,
      dispatch
    ),
    changeDrink: bindActionCreators(counterActionCreator.changeDrink, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launching);
