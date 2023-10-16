import "./App.css";
import Counter from "./Counter";
import "./bootstrap.min.css";

function App() {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="bg-black d-flex justify-content-center align-items-center"
    >
      <Counter />
    </div>
  );
}

export default App;
