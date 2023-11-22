import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function NewProduct() {
  let params = useParams();
  let [product, setProduct] = useState({
    id: params.productId,
    productName: "",
    description: "",
    price: "",
  });

  let { getProduct, addProduct, updateProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  let {
    id,
    productName,
    description,
    price,
    batteries,
    imageUrl,
    usedProduct,
  } = product;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await getProduct(id).then((product) => setProduct(product));
    }
    fetch();
  }, [id]);

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product);
    } else {
      return updateProduct(product);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addOrUpdate().then((product) => navigate(`/products/${product.id}`));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="productName"
          value={productName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batteries?</Form.Label>
        <Form.Control
          type="text"
          name="batteries"
          value={batteries}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ImageUrl</Form.Label>
        <Form.Control
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Used?</Form.Label>
        <Form.Control
          type="text"
          name="usedProduct"
          value={usedProduct}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
}

export default NewProduct;
