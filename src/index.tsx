import React from 'react';
import {Provider} from 'react-redux';
import Navigator from '@/navigator/index';
import store from '@/config/dav';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
