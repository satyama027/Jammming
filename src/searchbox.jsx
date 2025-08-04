function Searchbox(){
    return(
        <form id="searchForm">
            <input type="text" name="searchquery" required id="searchbox" />
            <input type="submit" value="SEARCH" id="searchbutton" className="button" />
        </form>
    );
}

export default Searchbox;