import React, { Component } from 'react' ;
import './App.css';

class Profile extends Component {
    render() {
        let artist = {
            name: '',
            stats: {listeners: ''},
            image: [{'#text': null}, {'#text': null}, {'#text': null}, {'#text': null}, {'#text': null}],
            tags: {tag: []}
        };
        if(this.props.artist !== null) {
            artist = this.props.artist;
        }

        return(
            <div className="profile">
                <img 
                    alt="Profile"
                    className="profile-img"
                    src={artist.image[4]['#text']}
                />
                <div className="profile-info">
                    <div className="profile-name">{artist.name}</div>
                    <div className="profile-listeners">{artist.stats.listeners} Listeners</div>
                    <div className="profile-tags">
                        {
                        artist.tags.tag.map((tag, k) => {
                                if(tag !== artist.tags.tag[artist.tags.tag.length-1]) {
                                    var tagName = " " + tag.name + ","; 
                                }
                                else {
                                    tagName = " " + tag.name;
                                }
                                //console.log(tag);
                                return (
                                    <span key = {k}>{tagName}</span>
                                )
                        }) 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;