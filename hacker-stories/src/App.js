import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key])

    return [value, setValue];
  }

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    "search",
    "React"
  )

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={ searchedStories }/>
      <MyButton />
      <MyButton />
      <Things />
    </div>
  );
};

const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  )


const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.numOfComments}</span>
    <span>{item.points}</span>
  </li>
);

const Search = (props) => {
  const { search, onSearch } = props;
    return (
    <div className="search">
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={ search } onChange={ onSearch } />

      <p>Searching for <strong>{props.searchTerm}</strong></p>
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
