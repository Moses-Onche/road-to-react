import { useState } from "react";

const App = () => {
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
};

const List = () => (
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
  const handleChange = (event) => (console.log(event.target.value));
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />
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
