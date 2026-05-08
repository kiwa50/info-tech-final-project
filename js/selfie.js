// This function is called when a user uploads an image to 
// appear in the helmet.
function onSelfieUpload() {
    let fileInput = document.getElementById("selfie");
    // Technically, it's possible to upload multiple files.
    // But we just want 1 image, so we'll just take the first 
    // file.
    let uploadedFile = fileInput.files[0];
    let filmElement = document.getElementById("selfie-upload-by-user");

    // Do basic check of whether the file exists
    if (uploadedFile) {
        // We now have to create this thing called an ObjectURL 
        // for the selected file 
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static
        let uploadedFileURL = URL.createObjectURL(uploadedFile);
        
        // Which we can then set to be the source of filmElement
        filmElement.src = uploadedFileURL;
        
        // And finally we get to make the image element visible!
        filmElement.style.display = "block";
    }
}
