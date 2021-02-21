import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">  {/*komentar */}
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '} {/*empty space*/}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button> //ispisi badge-brojac samo proizvoda u kosarici 
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}