function Track(props){
    return(
    <div class="track">
        <h3>{props.trackName}</h3>
        <span>{props.trackArtist}|</span><span>{props.trackAlbum}</span>
    </div>
    );
}

export default Track;