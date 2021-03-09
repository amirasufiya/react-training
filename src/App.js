import './App.css';

function App() {
  const title = "Welcome miras";
  const likes = 50;
  const person = { name: 'youshi', age: 30}; //this is object
  const google = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 100 + 1}</p>
        
        <a href={ google }>Google</a>
      </div>
    </div>
  );
}

export default App;
