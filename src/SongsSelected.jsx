import Tracklist from "./Tracklist";

// SongsSelected component
function SongsSelected(props){
    return(
        <div className="itemBox">
            <h2>Songs Selected</h2>
            <input type="text" placeholder="Playlist Name" className="textInput"/>
            {/* Displays the tracklist of selected songs */}
            <Tracklist trackArray={props.selection} displayAddButton={false}/>
            <input type="submit" className="button" value="SAVE TO SPOTIFY"/>
        </div>
    );
}

export default SongsSelected;
