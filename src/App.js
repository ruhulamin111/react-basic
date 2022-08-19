import './App.css';

function App() {

  return (
    <div>
      <Shop name="abc" age="12"></Shop>
      <Shop name='def' age='25'></Shop>

    </div>
  );
}

function Shop(props) {

  return (
    <div className='shop'>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <h1>Beliver Sign</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus perspiciatis repellat rem saepe tempore. Distinctio quod minus magnam tenetur.</p>
    </div>
  )
}

export default App;