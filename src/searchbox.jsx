function searchbox(){
    return(
        <form id="searchForm">
            <input type="text" name="searchquery" required id="searchbox" />
            <input type="submit" value="SEARCH" id="searchbutton" class="button" />
        </form>
    );
}

export default searchbox;