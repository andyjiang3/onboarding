import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Onboarding from '../components/Onboarding';

const OnboardingScreen = (props) => {
  return (
    <Onboarding 
     pages={[
       {
         backgroundColor: '#FFAE4E', 
         image: require('../assets/Plan2.png'),
         title: 'Plan',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
       {
        backgroundColor: '#FFBE97', 
        image: require('../assets/Work2.png'),
        title: 'Work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
       {
        backgroundColor: '#20B090', 
        image: require('../assets/Track.png'),
        title: 'Track',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
      ]} 
    />
  );
}

export default OnboardingScreen;
