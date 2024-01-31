import "./css/styles.css";

function handleShowRulesClick() {
  alert("Rules button clicked!");
}

function handlePlayAgainClick() {
  alert("Play again button clicked!");
}

// Event listeners
document.getElementById("rules-button").addEventListener("click", handleShowRulesClick);
document.getElementById("play-again-button").addEventListener("click", handlePlayAgainClick);