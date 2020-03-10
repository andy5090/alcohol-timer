import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TimerScreen from "../screens/Timer";
import CounterScreen from "../screens/Counter";
import SettingScreen from "../screens/Setting";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR, SELECTED_COLOR } from "../constants/Colors";
import { createStack } from "./config";
import Layout from "../constants/Layout";

const TabNavigation = createBottomTabNavigator(
  {
    Timer: {
      screen: createStack(TimerScreen, "Timer"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"timer"}></TabBarIcon>
        )
      }
    },
    Counter: {
      screen: createStack(CounterScreen, "Counter"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"beer"}></TabBarIcon>
        )
      }
    },
    Setting: {
      screen: createStack(SettingScreen, "Setting"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"settings"}></TabBarIcon>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        height: Layout.defaultFontSize * 3,
        backgroundColor: SELECTED_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
