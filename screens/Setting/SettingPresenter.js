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
        name="알람 메세지 설정"
        onPress={() =>
          navigation.navigate({
            routeName: "AlarmMsgs"
          })
        }
      />
      <TextButton
        name="술 종류 설정"
        onPress={() =>
          navigation.navigate({
            routeName: "Drinks"
          })
        }
      />
      <TextButton
        name="신체 정보 설정"
        onPress={() =>
          navigation.navigate({
            routeName: "User"
          })
        }
      />
      <TextButton
        name="앱 정보"
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
