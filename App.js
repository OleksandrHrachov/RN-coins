import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, FlatList} from 'react-native';

import {fetchLoader} from './api/fetchLoader';
import {Loader} from './components/Loader';
import {ListTitle} from './components/ListTitle';
import {ItemRow} from './components/ItemRow';

const App = () => {
  const [coinsList, setCoinsList] = useState([]);
  const [page, setPage] = useState(1);

  const helper = async () => {
    await fetchLoader(page)
      .then(newCoins => setCoinsList(newCoins))
      .catch(error => console.log(error));

    setPage(prev => prev + 1);
  };

  useEffect(() => {
    helper();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newPage = async () => {
    await fetchLoader(page).then(newCoins =>
      setCoinsList(prev => [...prev, ...newCoins]),
    );

    setPage(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cryptocurrency price</Text>

      <ListTitle />

      {coinsList.length === 0 ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={coinsList}
          onEndReachedThreshold={0.3}
          onEndReached={newPage}
          renderItem={({item}) => <ItemRow item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#82eddd',
  },
});

export default App;
