/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconfind: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.0512 0C229.2736 0 0 229.2736 0 512.0512 0.1024 794.6752 229.2736 1024 512.0512 1024s512.0512-229.2736 512.0512-512.0512S794.8288 0 512.1024 0z m254.3104 315.2384l-93.1328 325.888a46.592 46.592 0 0 1-31.9488 32L315.392 766.208a46.592 46.592 0 0 1-57.6-57.6l93.0816-325.888a46.592 46.592 0 0 1 32-31.9488l325.888-93.1328a46.592 46.592 0 0 1 57.6 57.6z m-351.744 197.6832a94.976 94.976 0 1 0 189.952 0 94.976 94.976 0 0 0-189.952 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfind.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconfind) : Iconfind;
