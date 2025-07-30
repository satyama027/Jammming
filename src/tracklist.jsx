import Track from './track'

function TrackList(props) {
    return(
        props.searchResults.map((track)=>{
           return <Track trackName={track.name} trackAlbum={track.album} trackArtist={track.artist} /> 
        })
    );
}

export default TrackList;