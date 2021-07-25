import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Dot = ({selected}) => {

  return (
    <View style={styles.dot(selected)}>
    </View>
  );
}

const styles = StyleSheet.create({
    dot: (selected) => ({
      width: selected ? 25 : 8,
      height: 8,
      borderRadius: selected ? '30%' : '50%',
      marginHorizontal: 3,
      backgroundColor: '#000',
    }),
  });

export default Dot;