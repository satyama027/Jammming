import TrackList from './tracklist';

function Results(props){
    return (
        <div class="itemBox">
            <h2>Results</h2>
            <TrackList searchResults={props.searchResults} />
        </div>
    );
}

export default Results;