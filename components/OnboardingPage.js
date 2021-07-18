import React from 'react';
import { StyleSheet, Text, View, Image,  useWindowDimensions, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const OnboardingPage = ({ backgroundColor, image, title, description, nextClicked, isLast }) => {
  return (
      <>
    <View style={styles.container(backgroundColor)}>
      <Image source={image} style={styles.pageImage}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.bottomNav(backgroundColor, useWindowDimensions().width * 0.26, useWindowDimensions().width * 0.1)}>
        {isLast ? 
            <TouchableOpacity
            style={styles.endButton}
            onPress={nextClicked}>
                <Text style={styles.buttonText(true)}>
                    Get started
                </Text>
            </TouchableOpacity> :
            <TouchableOpacity
            style={styles.nextButton}
            onPress={nextClicked}>
                <Text style={styles.buttonText(false)}>
                    Next
                </Text>
                <AntDesign name="arrowright" size={22} color="white" />
            </TouchableOpacity>
        }
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
  buttonText: (isLast) => ({
    fontSize: isLast ? 20 : 22, 
    color: isLast ? 'black' : 'white', 
    fontWeight: 'bold',
    marginRight: 8, 
  }),
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  endButton: {
      width: '100%',
      height: '60%',
      borderRadius: 30,
      backgroundColor: 'white',
      color: '#000',
      alignItems: 'center', 
     justifyContent: 'center',
     marginBottom: '8%',
  }
});

export default OnboardingPage;