import React from 'react';
import {
  View,
  StyleSheet
} from "react-native";

export default class TabviewPagerPanChildren extends React.Component {

  shouldComponentUpdate(newProps) {
    return true;
  }

  render() {
    let width = this.props.width;
    let i = this.props.i;
    let view = <View
      style={
              width
                ? { width }
                : this.props.i === this.props.navigationState.index ? StyleSheet.absoluteFill : null
            }
    >
      {i === this.props.navigationState.index || width ? this.props.child : null}
    </View>
    return view;
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
