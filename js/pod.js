async function getPhotoOfTheDay() {
    // We should take steps, likely via GitHub, to "hide" this API key
    // from the public!
    let apiKey = "4CZ408mbxhHdSSfuaEfuCy0OCBSBfW9PGDhoWv5H";
    let apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=2";
    var response = await fetch(apiURL);
    // should check if response is undefined. If is, we can wait and try to fetch the
    // API again.
    var jsonData = await response.json();
    let firstImage = jsonData[0];
    // let date = firstImage["date"];
    let caption = firstImage["explanation"];
    let hdurl = firstImage["hdurl"];
    let url = firstImage["url"]
    let mediaType = firstImage["media_type"];
    let title = firstImage["title"];

    var htmlToWrite = "<div id='photo-of-the-day-photo'><img src=" + url + "></div>";
    htmlToWrite = htmlToWrite + "<div class='photo-caption'>";
    htmlToWrite = htmlToWrite + "<h3 class='photo-title'>" + title + "</h3>";
    htmlToWrite = htmlToWrite + "<figcaption>" + caption + "</figcaption></div>";
    document.getElementById('photo-of-the-day-container').innerHTML = htmlToWrite;
}
getPhotoOfTheDay();