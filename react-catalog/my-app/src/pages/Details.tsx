import { type Product, readProduct, toDollars } from '../lib';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct() {
      try {
        const values = await readProduct(Number(productId));
        setProduct(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  function handleClick() {
    alert(`Added ${product?.name}`);
    navigate('/catalogue');
  }
  return (
    <div className="container m-auto">
      <Link to="/catalogue">
        <h3>{`< back to catalogue`}</h3>
      </Link>
      <div className="row flex p-auto">
        <div className="details-image">
          <img src={product.imageUrl} />
        </div>
        <div className="details-short">
          <h1>{product.name}</h1>
          <p className="text-gray">{toDollars(product.price)}</p>
          <p>{product.shortDescription}</p>
        </div>
      </div>
      <div className="row">
        <p>{product.longDescription}</p>
        <p>
          <button onClick={handleClick} type="button" className="border">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
}
