import { Component } from 'react'
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      filter: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('ComponentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users} },
        () => { console.log(this.state) },
      ))
  }

  render() {
    console.log('render')
    return (
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => this.setState({ filter: event.target.value })}
        />
        { this.state.monsters
          .filter(monster => monster.name.toLowerCase().includes(this.state.filter.toLowerCase()))
          .map(monster => {
            return (
              <div key={ monster.id }>
                <h1>{ monster.name }</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
