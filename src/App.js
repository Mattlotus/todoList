
import './App.css';
import todoList from './models/todolist'
import Header from './component/Header'
import Todolist from './component/Todolist';



function App() {
  return (
    <div className="App">
      {/* <h1>ToDoList</h1> */}
      <Header />
      <Todolist todos={todoList} />

      
    </div>
  );
}

export default App;
