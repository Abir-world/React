import "./App.css";
import Card from "./components/card.jsx";

const members = [
  { name: "Abdullah", age: 24 },
  { name: "Abir", age: 23 },
  { name: "Wasif", age: 30 },
  { name: "Anika", age: 16 },
];

function App() {
  return (
    <div>
      {members.map((member) => (
        <Card name={member.name} age={member.age} />
      ))}
    </div>
  );
}
export default App;
