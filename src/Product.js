import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext, useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function Product(props) {
  let params = useParams();
  let navigate = useNavigate();

  let { getProduct, deleteProduct } = useContext(ProductContext);
  let [product, setProduct] = useState();

  useEffect(() => {
    async function fetch() {
      await getProduct(params.productId).then((product) => setProduct(product));
    }
    fetch();
  }, [params.productId]);

  let [error, setError] = useState();

  useEffect(() => {
    setError(null);
    async function fetch() {
      await getProduct(params.productId)
        .then((product) => setProduct(product))
        .catch((message) => setError(message));
    }

    fetch();
  }, [params.productId, getProduct]);

  function errorMessage() {
    return (
      <Alert variant="danger">
        There was an error attempting to load this product: {error}
      </Alert>
    );
  }

  function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate("/products");
  }

  function loading() {
    return (
      <div className="w-25 text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  function productCard() {
    let {
      id,
      productName,
      batteries,
      description,
      price,
      imageUrl,
      usedProduct,
    } = product;
    return (
      <Card className="align-self-start w-25">
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
          <Card.Text>
            <strong>Price:</strong> <span>{price}</span>
          </Card.Text>
          <Card.Text>
            <strong>Batteries included?:</strong> <span>{batteries}</span>
          </Card.Text>
          <Card.Text>
            <strong>Is this Product used?:</strong> <span>{usedProduct}</span>
          </Card.Text>
          <Card.Img src={imageUrl} />
          <br />
          <br />
          <Link to={`/products/${id}/productId`} className="btn btn-secondary">
            View
          </Link>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">
            Edit
          </Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
  if (error) return errorMessage();
  if (product === undefined) return loading();
  return product.id !== parseInt(params.productId) ? loading() : productCard();
}

export default Product;
