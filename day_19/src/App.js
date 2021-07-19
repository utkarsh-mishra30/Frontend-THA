import Counter from "./components/Counter";
import "./styles.css";

function App() {
  let ar = [];
  for (let i = 0; i < 5; i++) {
    ar.push(<Counter />);
  }

  return <div className="App">{ar}</div>;
}
export default App;
