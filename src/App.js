
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx'
class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            SearchField:''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users}));
    }
    render() {
        const { monsters, SearchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(SearchField.toLowerCase()));
        return (
            <div className='App'>
                <h1>MONSTERS BOX</h1>
                <SearchBox
                    placeholder="monsters serach"
                    handleChange={e => this.setState({ SearchField:e.target.value })
                    }
                />
                <CardList monsters={filteredMonsters} />

               
               
                </div>
        );
    }
}


export default App;
