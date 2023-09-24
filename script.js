//your JS code here. If required.
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");
const displayText = document.getElementById("displayText");

enterButton.addEventListener("click", function() {
    statusParagraph.textContent = "Entered Metaverse";
    
    displayText.textContent = statusParagraph.textContent;
});