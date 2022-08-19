import { useState } from 'react';
import './App.css';

function App() {
  // array 
  const products = ['chips', 'ice cream', 'chocolet', 'biscuit', 'burger']
  // array of object 
  const students = [
    { name: 'abu bakar', age: 34 },
    { name: 'abdul karim', age: 44 },
    { name: 'baten shah', age: 35 },
    { name: 'shahen shah', age: 29 },
    { name: 'niyamot ullah', age: 38 }
  ];
  // state 
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>



      {/* product show  */}
      {
        products.map(product => <Shop name={product}></Shop>)
      }

      {/* students map  */}
      {
        students.map(student => <Seven
          name={student.name}
          age={student.age}
        ></Seven>)
      }

      {/* <Shop name='def' age='25'></Shop> */}

    </div>
  );
}


// counter component 
function Count() {

  return (
    <div>
      <h2>Count : { }</h2>
      <button>Increase</button>
      <br />
      <button>Decrease</button>
    </div>
  )
}

// class seven component 
function Seven(props) {
  return (
    <div className='school'>
      <h2>Name: {props.name} </h2>
      <h3>Age: {props.age}</h3>
    </div>
  )
}
// shop component 
function Shop(props) {
  return (
    <div className='shop'>
      <h1>Beliver Sign</h1>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default App;