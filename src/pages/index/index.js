import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import CButton from "../../components/Button";
import "./style.scss";

export default class Index extends Component {
  onShareAppMessage() {
    return {
      title: "独立星球最新酒单"
    };
  }

  navigate = (e, key) => {
    Taro.navigateTo({
      url: `/pages/${key}/index`
    });
  };

  render() {
    return (
      <View className="page page-index">
        <View className="header">
          <View className="title">星球</View>
          <View className="subtitle">Indie Crafted</View>
        </View>
        <View className="shop">
          <View className="text location ">北京 / Beijing</View>
          <View
            className="text button"
            onClick={e => this.navigate(e, "youth")}
          >
            <View>青年路空间站</View>
          </View>
        </View>
        <View className="shop">
          <View className="text location">成都 / Chengdu</View>
          <View
            className="text button"
            onClick={e => this.navigate(e, "galaxy")}
          >
            <View>玉林西路空间站</View>
          </View>
        </View>
      </View>
    );
  }
}
