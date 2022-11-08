import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CreateItem = ({ onTodoAdd }) => {
  const [title, setTitle] = useState('');

  const onPress = () => {
    onTodoAdd(title);
    setTitle('');
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={setTitle}
        value={title}
      />
      <TouchableOpacity
        accessibilityLabel='Add todo button'
        activeOpacity={0.5}
        style={style.button}
        onPress={onPress}
        disabled={title === ''}
      >
        <Text>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row' 
  },
  input: {
    flexGrow: 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  button: {
    justifyContent: 'center'
  }
});

export default CreateItem;