import { useEffect, useState } from "react";
import classes from "./Todo.module.scss";
function Todo({currentValue, onToggle, onDelete}) {
  
  const [save, setSave] = useState(null);

  // useEffect(() => {
  //   setSave(currentValue);

  //   console.log(save);
  // }, []);
  let output = "Loading...";

  useEffect(() => {

    setSave(currentValue);
    

    
    // setSave(window.localStorage.setItem("arr", JSON.stringify(currentValue)));


    
    // setSave(window.localStorage.getItem("arr"));

    // setSave(currentValue);

    // setSave(window.localStorage.getItem("arr") ? JSON.parse(localStorage.getItem("arr")) : []);

  window.localStorage.setItem("arr", JSON.stringify(output));    
  

  window.localStorage.getItem("arr");

  }, []);



  if(save !== null) {
    output = save;
  }

  const [t, setT] = useState({output});

  // useEffect(() => {
  //   setT({...output});
  // });

  console.log(t);

  return (  
    <div className={classes.Todo} key={currentValue.id}>
      <div  className={currentValue.complete ? `${classes.item__text} ${classes.strick}` : `${classes.item__text}`} onClick={() => onToggle(currentValue.id)} >
        {/* {save.map((el) => <li>{el.s}</li>)} */}
        {output.task}
          {console.log(output)}
         {/* {console.log(currentValue.task)} */}
      </div>
      <button onClick={() => onDelete(currentValue.id)}>
        Remove
      </button>

      <div>
        {t.output}
      </div>
    </div>
  );
}

export default Todo;