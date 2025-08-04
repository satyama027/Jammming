import Playlist from './Playlist';

// SavedPlaylist component
function SavedPlaylist(props){
    return(
        <div className="itemBox">
            <h2>Saved Playlists</h2>
            {/* Displays the playlists */}
            <Playlist playlists={props.playlists}/>
        </div>
    );
}

export default SavedPlaylist;
