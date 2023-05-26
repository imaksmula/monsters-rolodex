import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [ monsters, setMonsters ] = useState([])
  const [ searchField, setSearchField ] = useState('')
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters)

  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    setFilteredMonsters(filteredMonsters)

  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default App;
