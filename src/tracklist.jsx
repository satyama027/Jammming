import Track from './Track'

// TrackList component
function Tracklist(props) {
    return(
        // Maps through the trackArray and renders a Track component for each track
        props.trackArray.map((track)=>{
           return <Track key={track.id} trackId={track.id} trackName={track.name} trackAlbum={track.album} trackArtist={track.artist} displayAddButton={props.displayAddButton} addTrackToPlaylist={props.addTrackToPlaylist} /> 
        })
    );
}

export default Tracklist;
