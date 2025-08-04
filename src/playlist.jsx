import { FaCaretDown } from 'react-icons/fa';
import Tracklist from './Tracklist';
import React from 'react';

// Playlist component
function Playlist(props){
    return(
        // Maps through the playlists and displays each playlist's tracks
        props.playlists.map((playlist)=>{
            return (
                <React.Fragment key={playlist.playlistName}>
                    <span>{playlist.playlistName}</span>
                    <FaCaretDown />
                    <Tracklist trackArray={playlist.playlistTracks} displayAddButton={false} />
                </React.Fragment>
            )
        })
    );
}

export default Playlist;
