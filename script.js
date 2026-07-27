const messages = [
  "You make every single day brighter! ☀️",
  "Just a quick reminder: you are incredible. ❤️",
  "Thank you for being you. 🌸",
  "My favorite place in the world is right next to you! 🥰"
];

function revealMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("secret-message").innerText = messages[randomIndex];
}
