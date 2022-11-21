
import { Component } from 'react';


import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  handleClick = () => {
    this.setState(() => { return { name: "Cristo" } }, () => { });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()).then(
        (users) => this.setState(
          () => { return { monsters: users } },
          () => { })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }

  render() {
    console.log('render');
    const { onSearchChange } = this;
    const { monsters, searchField } = this.state;
    const filteredList = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search Monsters" className="monster-search-box" />
        <CardList monsters={filteredList} />
      </div>

    );
  }
}

export default App;
