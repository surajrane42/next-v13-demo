import TodosList from '@/components/TodosList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  console.log('Todos data', todos);
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodosList todos={todos} />
    </div>
  );
};

export default TodosPage;
