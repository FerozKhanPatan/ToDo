import AddTodo from "./assets/Components/AddTodo";
import AppName from "./assets/Components/AppName";
import Todoitem1 from "./assets/Components/Todoitem1";
import Todoitem2 from "./assets/Components/Todoitem2";
import "./App.css"

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <Todoitem1></Todoitem1>
      <Todoitem2></Todoitem2>
    </center>
  );
}
export default App;
