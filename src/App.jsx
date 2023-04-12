import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
function App() {
   const [inputValue,setInputValue] = useState("")
  return (
  <>
  <Header inputValue={inputValue} setInputValue={setInputValue} />
  <Main inputValu={inputValue} />
  </>);
}

export default App;
