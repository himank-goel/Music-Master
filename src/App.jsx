import React, { Component } from 'react' ;
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }

    search() {
        const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
        const API_KEY = '&api_key=fca59fffe8a5ffe52aca2d6534a5d42e&format=json&limit=1';
        var string = this.state.query;
        var replaced = string.split(' ').join('+');
        const FETCH_URL = BASE_URL + replaced + API_KEY;
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.artist;
            this.setState({artist});
            console.log(artist);
        });
        // console.log(FETCH_URL);
    }

    render() {
        return (
            <div className = "App">
                <div className = "App-title"> Music Master </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type = "text"
                            placeholder = "Search for an Artist" 
                            value = {this.state.query}
                            onChange = {
                                event => {
                                    this.setState({query: event.target.value})
                                }
                            }
                            onKeyPress = {
                                event => {
                                    if(event.key === 'Enter') {
                                        this.search();
                                    }
                                }
                            }
                        />
                        <InputGroup.Addon onClick = {() => this.search()}>
                            <Glyphicon glyph = "search" />
                        </InputGroup.Addon>  
                    </InputGroup>
                </FormGroup>
                <Profile
                    artist = {this.state.artist}
                />
                <div className = "Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;