const greetingEl = document.getElementById("greeting");
const welcomeMsg = document.getElementById("welcomeMsg");
const changeBtn = document.getElementById("changeGreetingBtn");
const toggleBtn = document.getElementById("toggleMsgBtn");

function setGreeting() {
  const hour = new Date().getHours();
  let text = "";
  if (hour < 12) text = "Good Morning!";
  else if (hour < 18) text = "Good Afternoon!";
  else text = "Good Evening!";
  greetingEl.textContent = text;
}

setGreeting();

changeBtn.onclick = () => {
  greetingEl.textContent = "Keep pushing forward. You got this!";
};

toggleBtn.onclick = () => {
  if (welcomeMsg.style.display === "none") welcomeMsg.style.display = "block";
  else welcomeMsg.style.display = "none";
};

greetingEl.onclick = () => {
  alert("Greeting clicked!");
};