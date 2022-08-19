import './App.css';

function App() {
  const products = ['chips', 'ice cream', 'chocolet', 'biscuit']
  return (
    <div>
      {
        products.map(product => <Shop name={product}></Shop>)
      }

      {/* <Shop name='def' age='25'></Shop> */}

    </div>
  );
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