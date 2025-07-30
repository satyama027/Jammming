function track(props){
    return(
        <h3>{props.trackName}</h3>
        <span>{props.trackArtist} |</span><span>{props.trackBand} |</span>
    );
}