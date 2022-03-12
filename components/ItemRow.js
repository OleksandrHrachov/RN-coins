import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

export const ItemRow = ({item}) => {
  return (
    <View style={styles.itemRow}>
      <Image style={styles.itemImg} source={{uri: item.image}} />
      <View style={styles.rowContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`$${item.current_price}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#9be0d5',
  },
  itemImg: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  rowContent: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 20,
  },
});
