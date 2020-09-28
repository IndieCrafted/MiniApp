import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Beer from "../../components/Beer";
import "./style.scss";

export default class Youth extends Component {
  config = {
    navigationBarTitleText: "星球 @ 北京"
  };

  state = {
    beerList: []
  };

  componentDidMount() {
    this.queryBeerList();
  }

  componentDidShow() {
    this.queryBeerList();
  }

  onShareAppMessage() {
    return {
      title: "北京星球 - 最新酒单"
    };
  }

  queryBeerList = () => {
    Taro.request({
      url: "https://api.wildnode.cc/beer/v1/beer/list?currentPage=1&pageSize=24"
    }).then(res => {
      const beerList = res.data.data.iData.filter(beer => beer.name !== "售罄");
      this.setState({
        beerList
      });
    });
  };

  render() {
    const { beerList } = this.state;

    return (
      <View className="page page-youth">
        {beerList.length &&
          beerList.map(beer => <Beer key={beer.id} data={beer} />)}
      </View>
    );
  }
}
