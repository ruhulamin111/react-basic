import { useEffect, useState } from 'react';
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

  return (
    <div>

      {/* counter show  */}
      <Count></Count>

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

// fetch data 
function ExternalData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <div>
      {
        users.map(user => <User
          name={user.name}
          email={user.email}
        ></User>)
      }
    </div>
  )
}

// user show 
function User(props) {

  return (
    <div>
      <h1>Car users</h1>
      <p><b>Name: </b>{props.name}</p>
      <p><b>Email: </b>{props.email}</p>

    </div>
  )
}

// counter component 
function Count() {
  // state 
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
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