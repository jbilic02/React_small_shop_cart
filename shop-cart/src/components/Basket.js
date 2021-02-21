import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props; {/*dohvacanje iz props podatke*/}
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0); //vraca se akumulator koji je pomnozen cijena s kolicina
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Košarica</h2>
      <div>
        {cartItems.length === 0 && <div>Košarica je prazna</div>} {/*ukoliko je niz prazan ispisi prazna kosarica*/}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)}kn
            </div>
          </div>
        ))}
        {/*ako ima proizvoda u kosarici, tada prikazi sve podatke od cijene, porez, dostava*/}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Cijena proizvoda</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)}kn</div>
            </div>
            <div className="row">
              <div className="col-2">Porez </div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)}kn</div>
            </div>
            <div className="row">
              <div className="col-2">Cijena dostave</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)}kn
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>ZA PLATITI(kn): </strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}kn</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Hvala na kupovini!')}>
                Zaključi kupovinu
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}