import './App.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo } from './store/todoSlice'


function App() {
  //const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  /*const addTodo = () => {
    if (text.trim().length) {
      setTodos([...todos,
      {
        id: new Date(),
        text,
        completed: false,
      }
      ])
    }
    setText('');
    console.log(todos)
  }*/



  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
