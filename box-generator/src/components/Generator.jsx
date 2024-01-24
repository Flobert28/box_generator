import React, { useState } from "react";
import styles from "./Generator.module.css";

const Generator = (props) => {
  const[Colors, SetColors ] = useState([]);
  const [CurrentColor, setCurrentColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SetColors([...Colors, CurrentColor]);
    setCurrentColor('');
  }
return(
  <>
  <form onSubmit={handleSubmit}>
    <label>Color:</label>
    <input type="text" value={CurrentColor} onChange={(e) => setCurrentColor(e.target.value)}/>
    <button type="submit" >Add</button>
  </form>
  <div className={styles.flex} >
        {Colors.map((color, index) => (
          <div key={index} className={styles.display} style={{backgroundColor: color}} ></div>
        ))}
      </div>
  </>
  )
}

export default Generator;