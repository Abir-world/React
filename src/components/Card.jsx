export default function Card(props) {
  console.log(props);
  return (
    <div>
      {props.children}
      <p>First name: {props.firstName}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
