import "./styles.css";
import Board from './Components/Board';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React ChessBoard</h1>
        <Board />
      </header>
    </div>
  );
}
