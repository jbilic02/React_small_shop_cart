import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.desc}</div>
      <hr></hr>
      <div>Cijena: {product.price} kn</div>
      
      <div>
        <button onClick={() => onAdd(product) & alert('proizvod je dodan u košaricu')}>Dodaj u kosaricu</button>

      </div>
    </div>
  );
}