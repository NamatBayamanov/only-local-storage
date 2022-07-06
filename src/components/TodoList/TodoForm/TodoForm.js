import { useState } from "react";
import classes from "./TodoForm.module.scss";
function TodoForm({onAddTask}) {
  const [userInput, setuserInput] = useState("");
  const [userInput2, setuserInput2] = useState("");
  const [userInput3, setuserInput3] = useState(0);


  function onSubmitForm(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);

    onAddTask(`${userInput} ${userInput2} ${userInput3}`);

    setuserInput("");
    setuserInput2("");
    setuserInput3(0);
  }
  function onChangeInput(event) {
    setuserInput(event.target.value);  
  }
  function onChangeInput2(event) {
    setuserInput2(event.target.value);
  }
  function onChangeInput3(event) {    
    setuserInput3(event.target.value);
  }

  // const onKeyDown = (event) => {
  //   if(event.key === "Enter") {
  //     onSubmitForm(event);
  //   }

  // onKeyDown={onKeyDown}
  // }

  return ( 
    <div className={classes.TodoForm}>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={userInput} onChange={onChangeInput} name="first_name"/>

        <input type="text" value={userInput2} onChange={onChangeInput2} name="last_name"/>

        <input min={0} max={10} type="number" value={userInput3} onChange={onChangeInput3} name="grade"/>
        <button >
          Send
        </button>
      </form>
    </div>
  );
}

export default TodoForm;