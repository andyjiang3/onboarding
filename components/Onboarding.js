import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import OnboardingPage from '../components/OnboardingPage'

const Onboarding = ({pages}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
      setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 30}).current;

  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
            <FlatList
            data={pages}
            renderItem={({item}) => (
                <OnboardingPage backgroundColor={item.backgroundColor} image={item.image} title={item.title} description={item.description}/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
	},
	
})


export default Onboarding;
