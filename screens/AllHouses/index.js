import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles, { images } from './styles';

export class AllHouses extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.home}>Homes 4 Rent</Text>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={styles.image} source={{ uri: item.src }} />
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
