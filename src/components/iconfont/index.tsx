/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconbussinessManFill from './IconbussinessManFill';
import Iconfind from './Iconfind';
import IconfavoritesFill from './IconfavoritesFill';
import IconhomeFill from './IconhomeFill';

export type IconNames = 'iconbussiness-man-fill' | 'iconfind' | 'iconfavorites-fill' | 'iconhome-fill';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconbussiness-man-fill':
      return <IconbussinessManFill key="1" {...rest} />;
    case 'iconfind':
      return <Iconfind key="2" {...rest} />;
    case 'iconfavorites-fill':
      return <IconfavoritesFill key="3" {...rest} />;
    case 'iconhome-fill':
      return <IconhomeFill key="4" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
