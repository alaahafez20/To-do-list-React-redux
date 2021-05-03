import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeItem } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const todosList =
      todos && todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <ul key={index} style={{width: '600px'}}>
              <li className="border d-flex justify-content-between">
                <div className="text">
                  <div>
                    <p>Title : {todo.title}</p>
                    <p>Content : {todo.content}</p>
                  </div>
                </div>
                <div>
                  <span className='btn btn-danger btn-sm' onClick={()=>dispatch(removeItem(index))}>x</span>
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted">no items on the list ..</p>
      );
  
    return (
      <div className="text-left">
        <h5 className="mx-5 text-muted">Todos List</h5>
        {todosList}
      </div>
    );
  };
  
  export default TodoList;
  