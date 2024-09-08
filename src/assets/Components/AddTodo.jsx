function AddTodo (){
  return (
        <div class="container items-container">
        <div class="row fk-row">
          <div class="col-6"><input type="text" placeholder="Enter the task"></input></div>
          <div class="col-4"><input type="date" /> </div>
          <div class="col-2"><button type="button" class="btn btn-success fk-button">Add</button></div>
        </div>
        </div>
  );
}

export default AddTodo;