import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export const ListTitle = () => {
  return (
    <View style={styles.itemRowHeader}>
      <Text style={styles.itemImageHeader}>#</Text>
      <View style={styles.rowContentHeadre}>
        <Text style={styles.itemNameHeader}>Coin</Text>
        <Text style={styles.itemPriceHeader}>Price</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRowHeader: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#3c8075',
  },
  itemImageHeader: {
    fontSize: 20,
    paddingLeft: 6,
  },
  rowContentHeadre: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNameHeader: {
    fontSize: 20,
  },
  itemPriceHeader: {
    fontSize: 20,
  },
});
