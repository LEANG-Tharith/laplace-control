// Dynamically change the greeting message
document.getElementById("greeting").textContent =
  "Hey There, I'm LEANG Tharith";

// Toggle Light/Dark Theme
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleButton.classList.toggle("dark");

  // Update button text based on theme
  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Switch to Light Theme";
  } else {
    toggleButton.textContent = "Switch to Dark Theme";
  }
});
