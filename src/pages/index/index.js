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
        <CButton onClick={e => this.navigate(e, "youth")}>青年路店</CButton>
        <CButton onClick={e => this.navigate(e, "galaxy")}>
          银河 SOHO 店
        </CButton>
      </View>
    );
  }
}
