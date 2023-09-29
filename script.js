//your JS code here. If required.
// Get references to the elements by their IDs
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", function () {
    // Create a new h1 element
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Entered Metaverse";
    statusParagraph.replaceWith(newHeading);
});
