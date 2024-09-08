function Todoitem1() {
let todoName = "Attend Session";
let todoDate = "10/09/2024";

  return (
 <div class="container items-container">
  <div class="row fk-row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2">
      <button type="button" class="btn btn-danger fk-button">
        Dele
      </button>
    </div>
  </div>
  </div>
  );
}

export default Todoitem1;
