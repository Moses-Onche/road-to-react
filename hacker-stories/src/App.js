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

function App() {

  // const welcome = {
  //   greeting: "Hey",
  //   title: "React",
  // }

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />

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
    </div>
  );
}

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

export default App;
