import "./styles.css";
import { useState } from "react";
import Timer from "./components/Timer";

export default function App() {
  const [showTimer, setshowTimer]=useState(true);

  return (
    <div className="App">
      {showTimer && <Timer />}
    <button onClick={()=>setshowTimer(!showTimer)}>
      Toggle show Timer(" ")
      </button>
    <h3>Show Timer Status -{showTimer? "Ture" : "False"}</h3>
    </div>
  );
}
