import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Beer from "../../components/Beer";
import "./style.scss";

export default class Galaxy extends Component {
  config = {
    navigationBarTitleText: "独立星球 @ 银河SOHO"
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
      url: "https://api.wildnode.cc/beer/v1/beer/list?currentPage=2&pageSize=24"
    }).then(res => {
      this.setState({
        beerList: res.data.data.iData.map(item => ({
          ...item,
          number: item.number ?  (item.number - 24) : item.number
        }))
      });
    });
  };

  render() {
    const { beerList } = this.state;

    return (
      <View className="page page-galaxy">
        {beerList.length &&
          beerList.map(beer => <Beer key={beer.id} data={beer} />)}
      </View>
    );
  }
}
