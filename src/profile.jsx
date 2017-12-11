import React, { Component } from 'react' ;
import './App.css';

class Profile extends Component {
    render() {
        let artist = {
            name: '',
            stats: {listeners: ''},
            image: [{'#text': ''}, {'#text': ''}, {'#text': ''}, {'#text': ''}, {'#text': ''}],
            tags: {tag: []}
        };
        if(this.props.artist !== null) {
            artist = this.props.artist;
        }

        return(
            <div>
                <img 
                    alt="Profile"
                    className="profile-img"
                    src={artist.image[4]['#text']}
                />
                <div>{artist.name}</div>
                <div>{artist.stats.listeners}</div>
                <div>
                    {
                       artist.tags.tag.map((tag, k) => {
                            if(tag !== artist.tags.tag[artist.tags.tag.length-1]) {
                                var tagName = " " + tag.name + ","; 
                            }
                            else {
                                var tagName = " " + tag.name;
                            }
                            //console.log(tag);
                            return (
                                <span key = {k}>{tagName}</span>
                            )
                       }) 
                    }
                </div>
            </div>
        )
    }
}

export default Profile;