import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => setValue(value + val);
  const clear = () => setValue("");
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <Display value={value} />
      <ButtonPanel onClick={handleClick} onClear={clear} onEquals={calculate} />
    </div>
  );
}

export default App;