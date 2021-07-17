import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Onboarding from '../components/Onboarding';

const OnboardingScreen = (props) => {
  return (
    <Onboarding 
     pages={[
       {
         backgroundColor: '#FFAE4E', 
         image: require('../assets/Plan.png'),
         title: 'Title 1',
         description: 'Description 1',
       },
       {
        backgroundColor: '#FFBE97', 
        image: require('../assets/Work.png'),
        title: 'Title 2',
        description: 'Description 2',
       },
       {
        backgroundColor: '#20B090', 
        image: require('../assets/Done.png'),
        title: 'Title 3',
        description: 'Description 3',
       },
      ]} 
    />
  );
}

export default OnboardingScreen;
