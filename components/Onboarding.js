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
                        <OnboardingPage backgroundColor={page.backgroundColor} image={page.image} title={page.title} description={page.description} 
                        nextClicked={pages.length - 1 == index ? () => {navigation.navigate('Home');} : () => {nextPage(index + 1)}} 
                        isLast={pages.length - 1 == index} numOfPages={pages.length} currentPage={index}/>
                    </View>  
                )
            })}
        </ViewPager>
    </View>
  );
}

export default Onboarding;
