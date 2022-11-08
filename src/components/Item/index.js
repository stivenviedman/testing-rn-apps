import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Checkbox from '../Checkbox';

const Item = ({ title, done, id, onTodoRemove, onTodoToggle }) => {
  const onRemove = () => onTodoRemove(id);
  const onToggle = () => onTodoToggle(id);

  return (
    <View style={styles.container} accessible accessibilityLabel={title} accessibilityHint='Todo item'>
      <View style={styles.leftContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onToggle}>
          <Checkbox checked={done} />
        </TouchableOpacity>
        <Text style={styles.title(done)}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity accessibilityLabel='Remove todo icon' activeOpacity={0.5} style={styles.removeButton} onPress={onRemove}>
          <Image style={styles.icon} source={require('../../assets/remove.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 10
  },
  leftContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightContainer: {
    width: '10%',
    flexDirection: 'row'
  },
  title: (done) => ({
    textAlign: 'left',
    marginLeft: 5,
    ...(done ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {})
  }),
  removeButton: {
    alignSelf: 'flex-end'
  },
  icon: {
    width: 25,
    height: 25 
  }
});


export default Item;