async function getPhotoOfTheDay() {
    // Construct apiURL that we'll call
    let apiKey = "4CZ408mbxhHdSSfuaEfuCy0OCBSBfW9PGDhoWv5H";
    let apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=20";
    // Call it!
    var response = await fetch_repeated(apiURL);
    var jsonData = await response.json();

    // Initialize a variable for later use
    let imagetoUse = "";
    // Loop through the 20 returned media elements until we get an
    // image, as opposed to a video. 
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i]["media_type"] == "image") {
            // now we know that this is an image.
            // So set it to the imagetoUse variable
            imagetoUse = jsonData[i];
            // and break out of this loop!
            break;
        }
        // If we somehow didn't get an image in our 20 media requests,
        // re-call this function to try again.
        getPhotoOfTheDay();
    }

    // Set variables that we'll need
    let caption = imagetoUse["explanation"];
    let url = imagetoUse["url"];
    let title = imagetoUse["title"];

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
