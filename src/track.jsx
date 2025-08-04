import { FaPlus } from 'react-icons/fa';

// Track component
function Track(props){

    function handleAddTrack() {
        props.addTrackToPlaylist({
            name: props.trackName,
            artist: props.trackArtist,
            album: props.trackAlbum,
            id: props.trackId,
        });
    }

    return(
    <div className="track">
        <div className="textArea">
            <h3>{props.trackName}</h3>
            <span>{props.trackArtist} | </span><span>{props.trackAlbum}</span>
        </div>
        {/* Displays the add button if displayAddButton is true */}
        {props.displayAddButton && <button onClick={handleAddTrack}><FaPlus /></button>}
    </div>
    );
}

export default Track;
