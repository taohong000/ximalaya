import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import IconFont from '@/components/iconfont';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

function getHeaderTitle(routeName: string | undefined) {
  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账号';
    default:
      return '首页';
  }
}

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState;
  };
}

class BottomTabs extends React.Component<IProps> {
  componentDidUpdate() {
    const {navigation, route} = this.props;
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params.screen || 'Home';
    navigation.setOptions({
      headerTitle: getHeaderTitle(routeName),
    });
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="iconhome-fill" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="iconfavorites-fill" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="iconfind" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont
                name="iconbussiness-man-fill"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
