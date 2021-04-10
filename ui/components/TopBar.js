import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text>Left</Text>
        <View>
            <Text style={{fontSize: 15}}>{this.props.title}</Text>
        </View>
        <Text>Right</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;