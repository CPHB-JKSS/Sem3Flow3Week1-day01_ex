import './App.css';

//Ex1
import upper, { text1, text2, text3 } from "./file1";

//Ex2
import person from "./file2";
import { males, females } from "./file2";
import MultiWelcome from "./file3";

const { firstName, email } = person;
console.log([...males, ...females]);
console.log([...males, ...females, "Sarah", "Tina"]);

function App() {
  return (
    <div className="App">
      <h2>Ex1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Ex2</h2>
      <p>Firstname: {firstName}, Email: {email}</p>

      <h2>Ex3</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
