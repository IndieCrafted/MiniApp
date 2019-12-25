import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Beer from "../../components/Beer";
import "./style.scss";

export default class Youth extends Component {
  config = {
    navigationBarTitleText: "独立星球 @ 青年路"
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
      title: "独立星球最新酒单"
    };
  }

  queryBeerList = () => {
    Taro.request({
      url: "https://api.wildnode.cc/beer/v1/beer/list?currentPage=1&pageSize=24"
    }).then(res => {
      this.setState({
        beerList: res.data.data.iData
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
