import './App.css';

function App() {
  const products = ['chips', 'ice cream', 'chocolet', 'biscuit', 'burger']
  const students = [
    { name: 'abu bakar', age: 34 },
    { name: 'abdul karim', age: 44 },
    { name: 'baten shah', age: 35 },
    { name: 'shahen shah', age: 29 },
    { name: 'niyamot ullah', age: 38 }
  ]
  return (
    <div>
      {
        products.map(product => <Shop name={product}></Shop>)
      }
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
function Seven(props) {
  return (
    <div className='school'>
      <h2>Name: {props.name} </h2>
      <h3>Age: {props.age}</h3>
    </div>
  )
}

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