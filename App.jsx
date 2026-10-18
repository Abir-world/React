import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card Name="Abir" age={23} />
      <Card Name="Islam" age={13} />
      <Card Name="wasif" age={25} />
    </div>
  );
}

export default App;
