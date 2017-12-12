import React, { Component } from 'react' ;
import './App.css';

class Gallery extends Component {
    render() {
        //console.log(this.props);
        const { tracks } = this.props;
        return (
            <div>
                {tracks.map((track, k) => {
                    const trackImg = track.image[3]["#text"];
                    //console.log(trackImg);
                    return (
                        <div 
                            key = {k} 
                            className = "track"
                        >
                            <img    
                                src = {trackImg}
                                className = "track-img"
                                alt = "track"
                            />
                            <div className="track-play">
                                <div className="track-play-inner">
                                    &#9654;
                                </div>
                            </div>
                            <p className = "track-text">
                                {track.name}
                            </p>
                        </div>
                    )
                })}
            </div>  
        )
    }
}

export default Gallery;