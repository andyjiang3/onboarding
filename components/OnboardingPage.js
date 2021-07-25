import React from 'react';
import { StyleSheet, Text, View, Image,  useWindowDimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OnboardingPageNumber from './OnboardingPageNumber'

const OnboardingPage = ({ backgroundColor, image, title, description, isLast }) => {
  const navigation = useNavigation();

  const beginClicked = () => {
    navigation.navigate('Home');
  }

  const { width } = useWindowDimensions()
  return (
    <>
    <View style={[styles.container(backgroundColor), { width }]}>
      <View style={{flex: 2}}>
        <Image source={image} style={[styles.pageImage(isLast), {width, resizeMode: 'contain'}]}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      
      {isLast &&
            
            <TouchableOpacity
            style={styles.endButton}
            onPress={beginClicked}>
                <Text style={styles.buttonText(true)}>
                    Get started
                </Text>
            </TouchableOpacity> 
          
        }
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor ? bgColor : '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
    paddingTop: '30%',
    flex: 1,
  }),
  pageImage: (isLast) => ({
    flex: isLast ? 0.87 : 0.7,
    justifyContent: 'center',
  }),
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 15,
    textAlign: 'center',
    color: '#000'
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
    color: 'white', 
    fontWeight: 'bold',
    marginRight: 8, 
  }),
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  endButton: {
      width: '95%',
      height: '10%',
      borderRadius: 30,
      backgroundColor: 'black',
      color: '#000',
      alignItems: 'center', 
     justifyContent: 'center',
     marginBottom: '8%',
  }
});

export default OnboardingPage;