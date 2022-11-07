import { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';

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
      <Pressable style={style.button} onPress={onPress}>
        <Text>
          Add
        </Text>
      </Pressable>
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