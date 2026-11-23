import React from 'react'
import { createRoot } from 'react-dom/client'

// React Class Components (W3Schools example)
class Header extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// React Components & React Props (W3Schools example)
function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

// React Destructuring Props (W3Schools example)
function Garage({ color, model }) {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Header />
      <Car brand="Ford" />
      <p>It is a {color} {model}!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage color="red" model="Mustang" />
);