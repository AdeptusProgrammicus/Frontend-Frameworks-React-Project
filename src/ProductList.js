import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import Card from "react-bootstrap/Card";
import "./ProductList.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ProductList(props) {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  let { deleteProduct } = useContext(ProductContext);
  function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate("/products");
  }
  function productList(products) {
    let { id } = products;
    if (products === null) return;
    return products
      .filter((products) => {
        return search.toLowerCase() === ""
          ? products
          : products.productName.toLowerCase().includes(search) ||
              products.description.toLowerCase().includes(search) ||
              products.price.toLowerCase().includes(search);
      })
      .map((product) => (
        <div className="productList">
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
      <Stack className="product-main" direction="horizontal" gap={3}>
        <div className="row row-cols-3 g-3">
          <ProductContext.Consumer>
            {({ products }) => productList(products)}
          </ProductContext.Consumer>
        </div>
      </Stack>
    </>
  );
}

export default ProductList;
