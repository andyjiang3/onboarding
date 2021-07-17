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
            {/* <View key="1">
                <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                <Text>Test 1</Text>
                </View>
            </View>
            <View key="2">
                <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                <Text>Test 2</Text>
                </View>
            </View> */}
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
