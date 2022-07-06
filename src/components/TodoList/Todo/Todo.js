import classes from "./Todo.module.scss";
function Todo({currentValue, onToggle, onDelete}) {
  return ( 
    <div className={classes.Todo} key={currentValue.id}>
      <div  className={currentValue.complete ? `${classes.item__text} ${classes.strick}` : `${classes.item__text}`} onClick={() => onToggle(currentValue.id)} >
        {currentValue.task}
      </div>
      <button onClick={() => onDelete(currentValue.id)}>
        Remove
      </button>
    </div>
  );
}

export default Todo;