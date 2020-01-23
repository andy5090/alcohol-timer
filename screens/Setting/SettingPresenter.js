import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import TextButton from "../../components/TextButton";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const SettingPresenter = ({ loaded, navigation }) =>
  loaded ? (
    <Loader />
  ) : (
    <Container>
      <TextButton
        name="Alarm Messages"
        onPress={() =>
          navigation.navigate({
            routeName: "AlarmMsgs"
          })
        }
      />
      <TextButton
        name="Drinks"
        onPress={() =>
          navigation.navigate({
            routeName: "Drinks"
          })
        }
      />
      <TextButton
        name="User Setting"
        onPress={() =>
          navigation.navigate({
            routeName: "User"
          })
        }
      />
      <TextButton
        name="Info"
        onPress={() =>
          navigation.navigate({
            routeName: "Info"
          })
        }
      />
    </Container>
  );

SettingPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default withNavigation(SettingPresenter);
