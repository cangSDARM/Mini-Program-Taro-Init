import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtLoadMore, AtTabBar } from 'taro-ui';
import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  config = {
    navigationBarTitleText: 'G-Cores'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <AtLoadMore onClick={() => {}} status="loading" />
        <AtTabBar
          fixed
          tabList={[
            {
              title: '首页',
              iconPrefixClass: 'iconfont',
              iconType: 'index'
            },
            {
              title: '视频',
              iconPrefixClass: 'iconfont',
              iconType: 'video'
            },
            {
              title: '电台',
              iconPrefixClass: 'iconfont',
              iconType: 'broadcasting',
              text: '100',
              max: '99'
            },
            {
              title: '文章',
              iconPrefixClass: 'iconfont',
              iconType: 'essay',
              text: '100',
              max: '99'
            }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}
