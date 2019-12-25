import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./style.scss";

class Beer extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { data } = this.props;
    const soldOut = data.name.trim() === "售罄";

    return (
      <View className="c-beer">
        <View className="c-beer__fragment">
          <View className="left">{data.number}</View>
          <View className="center">
            <View>
              {!soldOut && <Text className="brand">{data.brand.trim()}</Text>}
              <Text className="name">
                {soldOut ? "已售罄" : data.name.trim()}
              </Text>
            </View>
            <View className="en-name">
              {soldOut ? "SOLD OUT" : data.enName.trim()}
            </View>
            <View className="tags">
              <Text className="tag">
                {soldOut ? "---" : data.origin.trim()}
              </Text>
              <Text className="tag">{soldOut ? "---" : data.style.trim()}</Text>
              <Text className="tag">
                {soldOut ? "---" : `${data.vol.trim()}%`}
              </Text>
            </View>
          </View>
          <View className="right">
            <View className="price">
              {soldOut
                ? "---"
                : `${data.price ? parseFloat(data.price) : ""}元`}
            </View>
            <View className="spec">
              {soldOut ? "---" : `${data.spec.trim()}ml`}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Beer.defaultProps = {
  data: {
    number: "",
    brand: "",
    name: "",
    enName: "",
    origin: "",
    style: "",
    vol: "",
    price: "",
    spec: ""
  }
};

export default Beer;
