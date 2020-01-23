import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";
import MsgLoading from "./MsgLoading";
import { AsyncStorage } from "react-native";
import { purgeStoredState } from "redux-persist";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({ ...Ionicons.font });
    // AsyncStorage.removeItem("alreadyLaunched");
    //await AsyncStorage.clear();
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MsgLoading />
          </PersistGate>
        </Provider>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        ></AppLoading>
      );
    }
  }
}
