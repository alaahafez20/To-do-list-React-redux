
import './App.css';
import TodoForm from './components/Todo-form';
import TodoList from './components/Todo-list';

function App() {
  return (
    <div className="text-center py-2">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
