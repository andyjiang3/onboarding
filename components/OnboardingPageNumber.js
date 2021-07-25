import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dot from './Dot'


const OnboardingPageNumber = ({numOfPages, currentPage}) => {

  return (
    <View style={styles.container()}>
       {[...Array(numOfPages)].map((_, index) => (
         <Dot key={index} selected={index === currentPage}/>
       ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (bgColor) => ({
    flex: 0,
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }),
});

export default OnboardingPageNumber;
