//your JS code here. If required.
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", function () {
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Entered Metaverse";
    
    // Replace the old <p> with the new <h1>
    statusParagraph.parentNode.replaceChild(newHeading, statusParagraph);
});
