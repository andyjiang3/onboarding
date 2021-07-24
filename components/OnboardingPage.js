import React from 'react';
import { StyleSheet, Text, View, Image,  useWindowDimensions, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import OnboardingPageNumber from './OnboardingPageNumber'

const OnboardingPage = ({ backgroundColor, image, title, description }) => {
  const { width } = useWindowDimensions()
  return (
      <>
    <View style={[styles.container(backgroundColor), { width }]}>
      <Image source={image} style={[styles.pageImage, {width, resizeMode: 'contain'}]}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* <OnboardingPageNumber numOfPages={numOfPages} currentPage={currentPage} bgColor={backgroundColor}/> */}
    </View>
    {/* <View style={styles.bottomNav(backgroundColor, useWindowDimensions().width * 0.26, useWindowDimensions().width * 0.1)}>
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
    </View> */}
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
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 15,
    textAlign: 'center',
    color: '#493d8a'
  },
  description: {
    color: '#62656b',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: '18%',
    textAlign: 'center',
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