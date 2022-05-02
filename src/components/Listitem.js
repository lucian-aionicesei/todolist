export default function ListItem(props) {
  function handleDelete() {
    props.deleteItem(props.id);
  }
  function handleCompletion() {
    props.toggleCompletion(props.id);
  }
  
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task}
      <div className="buttons">
        <button onClick={handleCompletion}>
          {props.completed ? "Undo" : "Complete"}
        </button>{" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}
