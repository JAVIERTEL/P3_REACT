import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.Contenedor}>
      <Image source={require("./../public/spinner.gif")} testID="loading" style={styles.ImagenSpinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  Contenedor: {
    flex: 1,
    justifyContent: 'center',
    marginTop:200,
    alignItems: 'center',
  },
  ImagenSpinner: {
    width: 400,
    height: 400,
  },
});

export default LoadingSpinner;
