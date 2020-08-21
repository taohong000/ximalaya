import {Model} from 'dva-core-ts';
import {Reducer} from 'react';

interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState, any>;
  };
  // effects: {
  //   asyncAdd: Effect;
  // };
}

const homeModel: HomeModel = {
  namespace: 'home',
  state: {
    num: 0,
  },
  reducers: {
    add(state, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
};

export default homeModel;
