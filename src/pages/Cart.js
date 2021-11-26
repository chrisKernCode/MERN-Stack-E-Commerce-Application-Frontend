import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Bild</th>
          <th scope="col">Titel</th>
          <th scope="col">Preis</th>
          <th scope="col">Thema</th>
          <th scope="col">Farbe</th>
          <th scope="col">Anzahl</th>
          <th scope="col">Lieferung</th>
          <th scope="col">Löschen</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          {cart.length === 1 ? (
            <h4>{cart.length} Produkt im Einkaufskorb</h4>
          ) : (
            <h4>{cart.length} Produkte im Einkaufskorb</h4>
          )}

          {!cart.length ? (
            <p>
              Fügen Sie ein Produkt zu Ihrem Einkaufskorb hinzu: <Link to="/shop">Einkauf fortsetzen</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Zusammenfassung</h4>
          <hr />
          <p>Produkte</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Gesamtbetrag: <b>${getTotal()}</b>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
                zur Kassa gehen
              </button>
              <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
                Per Nachnahme bestellen
              </button>
            </>
          ) : (
            <div>
              <p>Bitte melden Sie sich an oder registrien Sie sich <br/> um mit der Bestellung fortzufahren</p>
            <button className="btn btn-sm btn-primary mt-1">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Anmelden
              </Link>
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
