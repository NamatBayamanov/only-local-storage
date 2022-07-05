import { useState } from "react";
import classes from "./Background.module.scss";
function Background() {
  const [input, setInput] = useState([]);

  function clearButton(event) {
    setInput("");
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const [save, setSave] = useState([]);

  function onAddWord(params) {
    setSave([input]);
  }

  console.log(save);
  let output = [...save.map((currentValue, index, arr) => {
    return <li>{currentValue}</li>;
  })];

  return (
    <div className={classes.Background}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.form}>
              <input type="text" value={input} onChange={onChangeInput} />
              <button onClick={clearButton}>Clear</button>
              <button onClick={onAddWord}>Add</button>
            </div>
            <article>{output}</article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
