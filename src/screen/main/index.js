import { View, StyleSheet } from 'react-native';

import Todos from '../../components/Todos';
import CreateItem from '../../components/CreateItem';
import useTodos from '../../hooks/useTodos';

const MainScreen = () => {
  const { addTodo, todos, removeTodo, toggleTodo } = useTodos();

  return (
    <View style={styles.container}>
      <Todos todos={todos} onTodoRemove={removeTodo} onTodoToggle={toggleTodo} />
      <CreateItem onTodoAdd={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});


export default MainScreen;
