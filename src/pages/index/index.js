import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Beer from '../../components/Beer'
import './style.scss'

export default class Index extends Component {
  state = {
    beerList: []
  }

  componentDidMount () {
    this.queryBeerList()
  }

  componentDidShow () {
    this.queryBeerList()
  }

  queryBeerList = () => {
    Taro.request({
      url: 'https://api.wildnode.cc/beer/v1/beer/list?currentPage=1&pageSize=24'
    }).then(res => {
      this.setState({
        beerList: res.data.data.iData
      })
    })
  }

  render () {
    const { beerList } = this.state

    return (
      <View className='page page-index'>
        {beerList.length && beerList.map(beer => (
          <Beer key={beer.id} data={beer} />
        ))}
      </View>
    )
  }
}
