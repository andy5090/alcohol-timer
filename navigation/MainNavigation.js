import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import AlarmScreen from "../screens/Alarm";
import AlarmMsgsScreen from "../screens/AlarmMsgs";
import DrinksScreen from "../screens/Drinks";
import InfoScreen from "../screens/Info";
import UserScreen from "../screens/User";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: { header: null }
    },
    Alarm: {
      screen: AlarmScreen,
      navigationOptions: () => ({
        ...headerStyles,
        headerShown: false
      })
    },
    AlarmMsgs: {
      screen: AlarmMsgsScreen,
      navigationOptions: () => ({
        ...headerStyles
      })
    },
    Drinks: {
      screen: DrinksScreen,
      navigationOptions: () => ({
        ...headerStyles
      })
    },
    User: {
      screen: UserScreen,
      navigationOptions: () => ({
        ...headerStyles
      })
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: () => ({
        ...headerStyles
      })
    }
  },
  { headerMode: "screen", headerBackTitleVisible: true }
);

export default createAppContainer(MainNavigation);
