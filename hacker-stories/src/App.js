import { useState } from "react";

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => setSearchTerm(event.target.value);
  return (
    <div>
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

export default App;
