import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const OnboardingPage = ({ backgroundColor, image, title, description }) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <Image source={image} style={styles.pageImage}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor ? bgColor : '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
    paddingTop: '30%'
  }),
  pageImage: {
    width: '80%',
    height: '40%',
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  }
});

export default OnboardingPage;