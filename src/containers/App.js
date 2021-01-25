import React from 'react'
import SearchBox from "../componemts/SearchBox";
import CardList from "../componemts/CardList";
import Scroll from "../componemts/scroll";
import ErrorBoundry from "../componemts/ErrorBoundry";
import '../App.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfiled: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }))
    }
    render() {
        const filteredrobot = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfiled.toLocaleLowerCase())
        })
        if (this.state.robots.length === 0) { return (<h1> Loading ...</h1>) }
        else {
            return (
                <div>
                    <h1 className='tc'> Robort  Friends  </h1>
                    <div className='tc'>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredrobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div >

            );
        }
    }
}
export default App; 