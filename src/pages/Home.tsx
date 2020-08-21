import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '../navigator';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models';

const mapStateToProps = ({home}: RootState) => ({
  num: home.num,
});
const connector = connect(mapStateToProps);

type modelState = ConnectedProps<typeof connector>;

interface IProps extends modelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  render() {
    const {num} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
