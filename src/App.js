import './App.css';
import Header from './app/Header'
import Item from './app/Item'
import data from './data'

function App() {
  return (
    <div className="App">
      <Header/>
      <ul className="travel-list">
        {data.map(i => <Item key={i.id} {...i}/>)}
      </ul>
    </div>
  );
}

export default App;
