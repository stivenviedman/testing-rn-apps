import { StyleSheet, SafeAreaView } from 'react-native';

import Todos from './src/components/Todos';
import CreateItem from './src/components/CreateItem';
import useTodos from './src/hooks/useTodos';

export default function App() {
  const { addTodo, todos, removeTodo, toggleTodo } = useTodos();

  return (
    <SafeAreaView style={styles.container}>
      <Todos todos={todos} onTodoRemove={removeTodo} onTodoToggle={toggleTodo} />
      <CreateItem onTodoAdd={addTodo} />
    </SafeAreaView>
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
