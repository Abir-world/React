import "./App.css";
import Card from "./components/Card";

const members = [
  { name: "Abdullah", age: 24 },
  { name: "Abir", age: 23 },
  { name: "Wasif", age: 30 },
  { name: "Anika", age: 16 },
];

function App() {
  return (
    <div>
      {/* <Card Name={members[0].name}age={members[0].age} />
      <Card Name={members[1].name}age={members[1].age} />
      <Card Name={members[2].name}age={members[2].age} />
      <Card Name={members[3].name}age={members[3].age} /> */}

      {members
        .filter((member) => member.age > 18)
        .sort((a, b) => a.age - b.age)
        .map((member) => (
          <Card name={member.name} age={member.age} />
        ))}
    </div>
  );
}
export default App;
