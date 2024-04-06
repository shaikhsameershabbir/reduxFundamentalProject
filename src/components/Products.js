import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlise";
import { getProducts } from "../store/productSlice";
function Products() {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  useEffect(() => {
    // APit
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);
  const addToCatrt = (product) => {
    // dispach from here to get store producet to store
    dispatch(add(product));
  };
  console.log("products", products);
  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card style={{ width: "18rem" }} key={product.key} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130 px" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}$</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" onClick={() => addToCatrt(product)}>
                Add To Cart
              </Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
  });
  return (
    <>
      <h3>THis is my products </h3>
      <div className="row">{cards}</div>;
    </>
  );
}

export default Products;
