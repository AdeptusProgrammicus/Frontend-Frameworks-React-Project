import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import Card from "react-bootstrap/Card";
import "./Welcome.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Welcome(props) {
  let navigate = useNavigate();
  let { deleteProduct } = useContext(ProductContext);
  function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate("/products");
  }
  function welcome(products) {
    let { id } = products;
    if (products === null) return;
    return products.slice(0, 3).map((product) => (
      <div className="welcomeimg">
        <Card.Img src={product.imageUrl} />
        <p>
          <strong>{product.productName}</strong>
        </p>
        <p>${product.price}</p>
        <ListGroup.Item key={product.id}>
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="btn btn-secondary"
          >
            View
          </Link>
          <Link
            to={`/products/${product.id}/edit`}
            className="btn btn-primary mx-3"
          >
            Edit
          </Link>
          <Button
            variant="danger"
            onClick={handleDeleteProduct.bind(this, product.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
        <br />
      </div>
    ));
  }

  return (
    <>
      <h1>Products</h1>
      <div>
        <Stack className="product-main" direction="horizontal" gap={3}>
          <div className="row row-cols-3 g-3">
            <ProductContext.Consumer>
              {({ products }) => welcome(products)}
            </ProductContext.Consumer>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Welcome;
