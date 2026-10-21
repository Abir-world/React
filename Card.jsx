import "./Card.css";

export default function Card({ name, age }) {
  const clickHandler = (memberName) => {
    console.log("gretings " + memberName);
  };

  const anotherClickHandler = () => {
    crossOriginIsolated.log("Another greetings");
  };

  const greetings = (name) => {
    clickHandler(name);
    anotherClickHandler();
  };

  return (
    <div onClick={() => clickHandandler(name)} className="card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
