import { useState } from "react";

const list = [
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

const App = () => (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <ul>
        {list.map((item) => {
          return <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.numOfComments}</span>
            <span>{item.points}</span>
          </li>
          })}
      </ul>
    <List />
    <MyButton />
    <MyButton />
    </div>
  );

const List = () => {
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <li key={item.objectID} >
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.numOfComments}</span>
              <span>{item.points}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
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
