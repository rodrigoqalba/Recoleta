import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default ProductList;