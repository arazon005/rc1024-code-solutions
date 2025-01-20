import { type Product, readCatalog, toDollars } from '../lib';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Catalogue.css';

export function Catalogue() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container m-auto">
      <h1>Catalogue</h1>
      <hr className="py-1" />
      <div className="catalogue-container">
        {items.map((product) => (
          <div key={product.productId}>
            <CatalogueEntry product={product} />
          </div>
        ))}
      </div>
    </div>
  );

  type EntryProps = {
    product: Product;
  };
  function CatalogueEntry({ product }: EntryProps) {
    return (
      <Link
        to={`details/${product.productId}`}
        className="block cursor-pointer bg-gray border catalogue-card">
        <div className="p-4">
          <div className="image-container">
            <img src={product.imageUrl} />
          </div>
          <h3>{product.name}</h3>

          <p className="p-2 text-gray">{toDollars(product.price)}</p>
          <p className="p-2">{product.shortDescription}</p>
        </div>
      </Link>
    );
  }
}
