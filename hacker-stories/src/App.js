import { useState } from "react";
import './App.css';

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      numOfComments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clarke",
      numOfComments: 2,
      points: 5,
      objectID: 1
    }
  ];


  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories}/>
      <MyButton />
      <MyButton />
      <Things />
    </div>
  );
};

const List = ({ list }) => (
  <div>
    <ul>
      {list.map(item => (
          <li key={item.objectID} >
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.numOfComments}</span>
            <span>{item.points}</span>
          </li>
        )
      )}
    </ul>
  </div>
);

const Search = ( { props } ) => {
  const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'black', 'orange', 'blue', 'lightgrey', 'lightblue']
  const [bdColor, setbDColor] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log("Rerender");
    setbDColor(colors[Math.trunc(Math.random() * 10)]);
    console.log(bdColor)
  };
  return (
    <div style={ {border: "solid " + bdColor}}>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />

      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>

    
  )
};

const MyButton = () => {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count * 2);
  }

  return (
    <>
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
    </>
  );
};

const Things = () => (
  <div className="thing">
    <p>List of things</p>
    <ul>
      <li>Thing 1</li>
      <li>Thing 2</li>
      <li>Thing 3</li> 
      <li>Thing 4</li>
    </ul>
  </div>
);

export default App;
