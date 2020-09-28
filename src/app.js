import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";
import "./app.scss";

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/youth/index", "pages/galaxy/index"],
    window: {
      backgroundColor: "#171717",
      navigationBarBackgroundColor: "#171717",
      navigationBarTextStyle: "white",
      navigationBarTitleText: "独立星球"
    }
  };

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
