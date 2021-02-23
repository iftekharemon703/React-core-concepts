import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'photoshop', price: '$999'},
    {name: 'illustator', price: '$77'},
    {name: 'adobe XD', price: '$66'},
    {name: 'adobe UI', price: '$6655'},
    {name: 'illustator UI', price: '$665'}
  ];

  const friends = ['jimi', 'emran', 'sakib', 'apu', 'polash', 'azad'];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Posts></Posts>
        <ul> 
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <Person name="jimi" form="cumilla"></Person>
        <Person name="emran" form="feni"></Person>
        <Person name="polash" form="cumilla"></Person>
        <Person name="sakib" form="cumilla"></Person>
        <Person name="apu" form="fulgazi"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const style = {
    color: 'cyan',
    border: '2px solid blue',
    padding: '10px', 
    margin: '10px',
    width: '20%',
    float: 'left',
  }
  return (
    <div style={style}>
        <h2>{props.name}</h2>
        <p>{props.form}</p>
    </div>
  );
}

function Product(props){
  const productStyle = {
    backgroundColor: 'gray',
    border: '1px solid black',
    width: '150px',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Posts (){
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, [] )
  return (
    <div>
      <h3>Dynamic Post: {post.length}</h3>
      <ul>
        {
          post.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
