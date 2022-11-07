import { FlatList, View, Text, StyleSheet } from 'react-native';
import Item from '../Item';

const Todos = ({ todos, onTodoRemove, onTodoToggle }) => (
  <FlatList
    style={{ flexGrow: 4 }}
    data={todos}
    ListEmptyComponent={() => {
      return (
        <View style={style.emptyState}>
          <Text>
            Please, start by adding a todo item.
          </Text>
        </View>
      )
    }}
    renderItem={({ item }) => <Item {...item} onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} />}
  />
);

const style = StyleSheet.create({
  emptyState: {
    marginTop: 15,
  }
})

export default Todos;
