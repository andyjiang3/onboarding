import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Onboarding from '../components/Onboarding';

const OnboardingScreen = (props) => {
  return (
    <Onboarding 
     pages={[
       {
         id: 1,
         backgroundColor: '#fff', 
         image: require('../assets/Plan2.png'),
         title: 'Plan',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
       {
        id: 2,
        backgroundColor: '#fff', 
        image: require('../assets/Work2.png'),
        title: 'Work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
       {
        id: 3,
        backgroundColor: '#fff', 
        image: require('../assets/Track.png'),
        title: 'Track',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       },
      ]} 
    />
  );
}

export default OnboardingScreen;
