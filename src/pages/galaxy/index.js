import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Beer from "../../components/Beer";
import "./style.scss";

export default class Galaxy extends Component {
  config = {
    navigationBarTitleText: "星球 @ 成都"
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
      title: "成都星球 - 最新酒单"
    };
  }

  queryBeerList = () => {
    Taro.request({
      url: "https://bs.hazysoda.com/api/public/beer/1,6,7,8"
    }).then(res => {
      const beerList = res.data.flat().filter(beer => beer.name !== "售罄");
      this.setState({
        beerList
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
