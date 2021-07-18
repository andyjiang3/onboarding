import React from 'react';
import { StyleSheet, Text, View, Image,  useWindowDimensions, TouchableOpacity} from 'react-native';

const OnboardingPage = ({ backgroundColor, image, title, description, nextClicked, text }) => {
  return (
      <>
    <View style={styles.container(backgroundColor)}>
      <Image source={image} style={styles.pageImage}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.bottomNav(backgroundColor, useWindowDimensions().width * 0.26, useWindowDimensions().width * 0.12)}>
        <TouchableOpacity
            style={styles.button}
            onPress={nextClicked}
        >
        <Text style={styles.next}>
            {text}
        </Text>
        </TouchableOpacity>
    </View>
    </>
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
    width: '90%',
    height: '50%',
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
  },
  bottomNav: (bgColor, height, padding) => ({
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: height ? height : 50,
      backgroundColor: bgColor ? bgColor : '#fff',
      alignItems: 'center',
      paddingHorizontal: padding,
  }),
  next: {
    fontSize: 22, 
    color: 'white', 
    fontWeight: 'bold' 
  },
  button: {
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default OnboardingPage;