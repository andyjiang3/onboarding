import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Animated, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Pagination } from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';

import OnboardingPage from '../components/OnboardingPage'
import OnboardingPageNumber from './OnboardingPageNumber'

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
                <OnboardingPage backgroundColor={item.backgroundColor} image={item.image} title={item.title} description={item.description} isLast={item.id == pages.length}/>
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
            >
            </FlatList>
            <Pagination
					dotsLength={pages.length}
					activeDotIndex={currentIndex}
					containerStyle={{ backgroundColor: 'white' }}
					dotStyle={{
						width: 15,
						height: 15,
						borderRadius: 7.5,
						marginHorizontal: 8,
						backgroundColor: '#000',
                        marginBottom: '20%',
					}}
					inactiveDotStyle={
						{
							// Define styles for inactive dots here
						}
					}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>
            {/* <OnboardingPageNumber numOfPages={pages.length} currentPage={currentIndex} style={{flex: 1}}/> */}
           
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
