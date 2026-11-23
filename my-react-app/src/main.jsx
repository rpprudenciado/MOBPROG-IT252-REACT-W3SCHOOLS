import { createRoot } from 'react-dom/client'

const favoriteDrink = "Iced Matcha Latte";
const cupsToday = 2;

const containerClass = "content";

let energyStatus = "Ready to code!";
if (cupsToday >= 2) {
  energyStatus = "Fully caffeinated and ready to build React apps!";
}

const myElement = (
  <div id="main-container" className={containerClass}>
    <h1>My Coding Fuel</h1>
    <p>My go-to drink is {favoriteDrink} and I have had {cupsToday * 1} cups today.</p>
    <p>Status: {energyStatus}</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  myElement
);