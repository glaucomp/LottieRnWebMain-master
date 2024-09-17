import React from 'react';
import LottieView from "react-native-web-lottie";
import { StyleSheet, View } from 'react-native';

const LottieLuckySymbolCoinSlot = ({ luckySymbolCount }) => {
  return (
    <View style={styles.lottieContainer}>
      {[...Array(luckySymbolCount)].map((_, i) => (
        <LottieView
          key={i}
          style={styles.lottieLuckyAnimation}
          source={require('./../assets/lotties/lottie3DCoinSlot.json')}
          autoPlay
          speed={1}
          loop={false}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 15,
    bottom: 15,
  },
  lottieLuckyAnimation: {
    width: '45%',
    height: '45%',
    marginHorizontal: -9,
    marginBottom: 3,
  },
});

export default LottieLuckySymbolCoinSlot;
