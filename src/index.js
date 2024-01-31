import "./css/styles.css";

// UI Logic
function handleShowRulesClick() {
  alert("Rules button clicked!");
}

function handlePlayAgainClick() {
  alert("Play again button clicked!");
}

// Window load listener
window.addEventListener("load", function() {
  document.getElementById("rules-button").addEventListener("click", handleShowRulesClick);
  document.getElementById("play-again-button").addEventListener("click", handlePlayAgainClick);
});