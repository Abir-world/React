//*file extention must be .jsx
//* component name must start with capital letter
//* there must be a default export import
//* there must be a single route return

// const TestComponent = () => {
//     return <h1>Test Component</h1>;
// };

// export default TestComponent;

const name = "fin"

export default function TestComponent(){
    return (
        <div>
            <h1>Test Componet</h1> <p>My name is {name}</p>
        </div>
    )
}