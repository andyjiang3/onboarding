import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const OnboardingPage = ({ backgroundColor, image, title, description }) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <Image source={image}/>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor ? bgColor : '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  }),
});

export default OnboardingPage;