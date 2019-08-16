import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundColor: '#171717',
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: 'white',
      navigationBarTitleText: '独立星球'
    }
  }

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
