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
         title: 'Plan',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
       {
        backgroundColor: '#FFBE97', 
        image: require('../assets/Work.png'),
        title: 'Work',
        description: 'Description 2',
       },
       {
        backgroundColor: '#20B090', 
        image: require('../assets/Done.png'),
        title: 'Done',
        description: 'Description 3',
       },
      ]} 
    />
  );
}

export default OnboardingScreen;
