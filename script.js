//your JS code here. If required.
function updateSize() {
    // Get the current width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Select the <h1> tag inside the div with id="sizeInfo"
    const sizeInfo = document.querySelector('#sizeInfo h1');

    // Update the content of the <h1> tag with the window dimensions
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Call updateSize once to initialize the size on page load
updateSize();

// Add an event listener to the window to detect resizing
window.addEventListener('resize', updateSize);
