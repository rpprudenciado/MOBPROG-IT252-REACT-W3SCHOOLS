function App() {
  const favoriteDrink = "Iced Matcha Latte";
  const cupsToday = 2;

  const cardClass = "drink-card";
  const isOutOfStock = false;

  let energyStatus = "Ready to code!";
  if (cupsToday >= 2) {
    energyStatus = "Fully caffeinated and ready to build React apps!";
  }

  return (
    <div id="main-container" className={cardClass} style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My Coding Fuel</h1>
      <p>My go-to drink is {favoriteDrink} and I have had {cupsToday * 1} cups today.</p>
      <p>Status: {energyStatus}</p>
      <button disabled={isOutOfStock}>Order Another Cup</button>
    </div>
  );
}

export default App;