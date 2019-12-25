import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./style.scss";

class CButton extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { children, onClick } = this.props;

    return (
      <View className="c-button" onClick={onClick}>
        {children}
      </View>
    );
  }
}

export default CButton;
