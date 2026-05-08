// Hide the "film" element where the selfie image will eventually
// appear
var filmElement = document.getElementById("selfie-upload-by-user");
filmElement.style.display = "none";

// When a user uploads an image.... 
function onSelfieUpload(event) {
    // Get the file input element that triggered the event
    var fileInput = event.target;
    // Technically, it's possible to upload multiple files.
    // But we just want 1 image, so we'll just take the first 
    // file.
    var uploadedFile = fileInput.files[0];
    
    // Check if a file was actually selected
    if (uploadedFile) {
        // We now have to create this thing called an ObjectURL 
        // for the selected file 
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static
        var uploadedFileURL = URL.createObjectURL(uploadedFile);
        
        // Which we can then set to be the source of filmElement
        filmElement.src = uploadedFileURL;
        
        // And finally we get to make the image element visible!
        filmElement.style.display = "block";
    }
}
