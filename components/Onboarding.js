import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import OnboardingPage from '../components/OnboardingPage'

const Onboarding = ({pages}) => {
  const pageIndexRef = useRef(null);
  const navigation = useNavigation();
  
  const nextPage = (pageNum) => {
      pageIndexRef.current.setPage(pageNum);
  }
  return (
    <View style={{flex: 1}}>
        <ViewPager style={{flex: 1}} initialPage={0} ref={pageIndexRef}>
            {pages.map((page, index) => {
                return (
                    <View key={index}>
                        {pages.length - 1 == index ? 
                        <OnboardingPage backgroundColor={page.backgroundColor} image={page.image} title={page.title} description={page.description} nextClicked={() => {navigation.navigate('Home');}} text="Get Started"/>
                        : <OnboardingPage backgroundColor={page.backgroundColor} image={page.image} title={page.title} description={page.description} nextClicked={() => {nextPage(index + 1)}} text="Next"/>

                    }
                        
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
