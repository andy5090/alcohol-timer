import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";
import Launching from "./Launching";
import Loader from "./components/Loader";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font,
      "NanumMyeongjo-Regular": require("./assets/fonts/NanumMyeongjo-Regular.ttf"),
      MapoGoldenPier: require("./assets/fonts/MapoGoldenPier.ttf"),
      "BlackHanSans-Regular": require("./assets/fonts/BlackHanSans-Regular.ttf"),
      "GothicA1-Light": require("./assets/fonts/GothicA1-Light.ttf"),
      "GothicA1-Regular": require("./assets/fonts/GothicA1-Regular.ttf"),
      "GothicA1-Thin": require("./assets/fonts/GothicA1-Thin.ttf"),
      "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
      "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf")
    });
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
