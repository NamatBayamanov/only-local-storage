import { useEffect, useState } from "react";
import classes from "./Background.module.scss";
function Background() {

  const [styles2, setStyles2] = useState({
    backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
    height: 500 + "px",
  });




  // useEffect(() => {
  //   setInterval(() => {
  //     setStyles2({backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`, height: 500 + "px", transition: 1 + "s",}); 
  //   }, 1000);
  // }, [setStyles2]);



  const [input, setInput] = useState("");

  function clearButton(event) {
    setInput("");
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);

    window.localStorage.setItem("name", event.target.value);

    window.localStorage.setItem("color", !styles2);
  };

  useEffect(() => {
    setInput(window.localStorage.getItem("name"));
  }, []);
  // const [save, setSave] = useState([]);

  // function onAddWord(params) {
  //   setSave([input]);
  // }

  // console.log(save);
  // let output = [...save.map((currentValue, index, arr) => {
  //   return <li>{currentValue}</li>;
  // })];



  

  return (
    <div className={classes.Background}>
      <div className={classes.background} style={styles2} >
        <div className="container">
          <div className={classes.content}>
            <div className={classes.form}>
              <input type="text" value={input} onChange={onChangeInput} />
              <button >Clear</button>
              {/* <button onClick={onAddWord}>Add</button> */}
            </div>
            {/* <article>{output}</article> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
