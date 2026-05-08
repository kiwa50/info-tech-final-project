async function getPhotoOfTheDay() {
    // Construct apiURL that we'll call
    let apiKey = "4CZ408mbxhHdSSfuaEfuCy0OCBSBfW9PGDhoWv5H";
    let apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=1";
    var response = await fetch_repeated(apiURL);
    var jsonData = await response.json();
    // Get first (and only) image in response JSON
    let firstImage = jsonData[0];
    // Set variables that we'll need
    let caption = firstImage["explanation"];
    let url = firstImage["url"]
    let title = firstImage["title"];

    // Construct a new <div> to HTML page with the photo and text
    let htmlToWrite = "<div id='photo-of-the-day-photo'><img src=" + url + "></div>";
    htmlToWrite = htmlToWrite + "<div class='photo-caption'>";
    htmlToWrite = htmlToWrite + "<h3 class='photo-title'>" + title + "</h3>";
    htmlToWrite = htmlToWrite + "<figcaption>" + caption + "</figcaption></div>";
    // Re-write the innerHTML of #photo-of-the-day-container to this be this <div>
    document.getElementById('photo-of-the-day-container').innerHTML = htmlToWrite;
}

// Try exactly 3 times to fetch apiURL before giving up 
// and returning a basic error message string.
async function fetch_repeated(apiURL) {
    for (let i = 0; i < 3; i++) {   
        return await fetch(apiURL);
    }
    return "Error fetching Photo of the Day";
}

// We want to fetch a photo when the page loads, so just call the function 
// right here and now.
getPhotoOfTheDay();
