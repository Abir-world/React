// export default function Card(props) {
//     console.log(props)
//     return (
//         <div>
//             {props.children}
//             <p>First name: {props.firstName}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }


// --> conditional rendaring
import './Card.css'

// export default function Card({Name, age}) {
// if(age<18){
//     return <div className = "card">you are too young</div>
// }

//     return (
//         <div className = "card">
//             <p>Name: {Name}</p>
//             <p>Age: {age}</p>
//         </div>
//     )
// }


//* conditional operator
// export default function Card({Name, age}) {
//     return (
//         <>
//         {age > 18 && (
//             <div className = "card">
//             <p>Name: {Name}</p>
//             <p>Age: {age}</p>
//             </div>
//         )}
//         {age < 18 && <div className="card"> you are
//              too young</div>}
//         </>
//     )    
// } 

//* ternary operator
export default function Card({Name, age}) {
    return (
        <>
        {age > 18 ?(
            <div className = "card">
                <p>Name: {Name}</p>
            <p>Age: {age}</p>
            </div>
        ) : <div className="card"> you are
             too young</div>}
        </>
    )    
} 
