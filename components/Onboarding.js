import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import OnboardingPage from '../components/OnboardingPage'

const Onboarding = ({pages}) => {
  const pageIndexRef = useRef(null);
  
  const nextPage = (pageNum) => {
      pageIndexRef.current.setPage(pageNum);
  }
  return (
    <View style={{flex: 1}}>
        <ViewPager style={{flex: 1}} initialPage={0} ref={pageIndexRef}>
            {pages.map((page, index) => {
                return (
                    <View key={index}>
                        <OnboardingPage backgroundColor={page.backgroundColor} image={page.image} title={page.title} description={page.description} nextClicked={() => {nextPage(index + 1)}}/>
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
