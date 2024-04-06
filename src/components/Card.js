import React from "react";
import Button from "react-bootstrap/Button";
import Cards from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlise";

function Card() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Cards style={{ width: "18rem" }} key={product.title} className="h-100">
          <div className="text-center">
            <Cards.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130 px" }}
            />
            <Cards.Body>
              <Cards.Title>{product.title}</Cards.Title>
              <Cards.Text>{product.price}$</Cards.Text>
            </Cards.Body>
            <Cards.Footer>
              <Button
                variant="danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove Itom
              </Button>
            </Cards.Footer>
          </div>
        </Cards>
      </div>
    );
  });

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}

export default Card;
