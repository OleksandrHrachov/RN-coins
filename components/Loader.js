import React from 'react';

import {Text, StyleSheet, ActivityIndicator} from 'react-native';

export const Loader = () => {
  return (
    <>
      <Text style={styles.notification}>Please wait</Text>
      <ActivityIndicator size="large" />
    </>
  );
};

const styles = StyleSheet.create({
  notification: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
});
