import { View, Image, StyleSheet } from 'react-native';

const Checkbox = ({ checked }) => (
  <View accessible accessibilityLabel='Check todo icon' accessibilityState={{ checked }}>
    {
      checked
        ? <Image style={styles.container} source={require('../../assets/checked.png')}/>
        : <Image style={styles.container} source={require('../../assets/unchecked.png')}/>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25 
  }
});

export default Checkbox;