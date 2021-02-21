import React from 'react';
import Product from './Products';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Proizvodi- prodaja slika</h2>
      <div className="row">
        {/*za prikaz proizvoda, ime niza products.map funkcija koja ce dohvatit svaki elem  niza i convertat ga u jss object
        koristeci arrow,  koristi se key kako bi se sprijecilo dupliciranje, postavlja se na product.id*/}
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}