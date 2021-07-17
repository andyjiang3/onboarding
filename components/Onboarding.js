import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import OnboardingPage from '../components/OnboardingPage'

const Onboarding = ({pages}) => {
  return (
    <View style={{flex: 1}}>
        <ViewPager style={{flex: 1}}>
            {pages.map((page, index) => {
                return (
                    <View key={index}>
                        <OnboardingPage backgroundColor={page.backgroundColor} image={page.image} title={page.title} description={page.description}/>
                    </View>  
                )
            })}
        </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
