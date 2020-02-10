import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";
import Launching from "./Launching";
import { AsyncStorage } from "react-native";
import Loader from "./components/Loader";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({ ...Ionicons.font });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <Launching />
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
