import { Component } from 'react'

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users} },
        () => { console.log(this.state) },
      ))
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <SearchBox 
          className='search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
