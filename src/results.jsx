import TrackList from './Tracklist';

// Results component
function Results(props){
    return (
        <div className="itemBox">
            <h2>Results</h2>
            {/* Displays the tracklist with add buttons */}
            <TrackList trackArray={props.searchResults} displayAddButton={true} addTrackToPlaylist={props.addTrackToPlaylist} />
        </div>
    );
}

export default Results;
