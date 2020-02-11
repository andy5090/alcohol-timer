import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TimerScreen from "../screens/Timer";
import CounterScreen from "../screens/Counter";
import SettingScreen from "../screens/Setting";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR } from "../constants/Colors";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
  {
    Timer: {
      screen: createStack(TimerScreen, "Timer"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-timer" : "md-timer"}
          ></TabBarIcon>
        )
      }
    },
    Counter: {
      screen: createStack(CounterScreen, "Counter"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-pint" : "md-pint"}
          ></TabBarIcon>
        )
      }
    },
    Setting: {
      screen: createStack(SettingScreen, "Setting"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
          ></TabBarIcon>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
