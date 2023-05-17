import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
});

interface IDashboardBackgroundProps {
  children: React.ReactNode;
}

export default function DashboardBackground(props: IDashboardBackgroundProps) {
  const children = props.children;

  return (
    <ImageBackground
      source={require('../../../assets/images/background-dashboard.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}
