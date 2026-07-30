const messages = [
  "I will never leave my tichu puchu cuutu patuu everrrr😤",
  "Just a quick reminder, I love you more than anythingg and will never leave you❤️",
  "Thank you for being you. 🌸",
  "I live you for who you aree sooo neverrr changee warna bumpitttii"
];

function revealMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("secret-message").innerText = messages[randomIndex];
}
