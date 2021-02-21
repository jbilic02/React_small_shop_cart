import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data; {/*podatci izvuceni iz data*/}
  const [cartItems, setCartItems] = useState([]); {/*Prvi element je trenutna vrijednost stanja, a drugi element je funkcija postavljača stanja*/}
  {/*setCartItems ce promijeniti vrijednost cartItemsa*/}

  //funkcija dodavanja, prihvaca product koji treba biti dodan u kosaricu
  //var exist provjerava id sa id productom (koeg se dodaje u kosaricu) preko cartItems
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        ) //setCartItems ce primiti novu vrijednost ako se doda taj product, provjerava se id i ako je tocan, qty: exist.qty + 1, dok ostali items ostaju isti : x 
      );
    } else { //ukoliko ne postoji u kosarici, tada se dodaje koristeci array concatenation
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //brisanje
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) { //brisanje proizvoda iz kosarice preko filtera, boolean
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header> {/*badge kad se klikne na proizvod da se prikaze kolicina*/}
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd} //prosljeduju se obe funkcije u basket 
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;