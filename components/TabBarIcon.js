import React from "react";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const iconSize = Layout.defaultFontSize * 1.5;

const TabBarIcon = ({ name, focused }) => (
  <MaterialCommunityIcons
    size={iconSize}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
