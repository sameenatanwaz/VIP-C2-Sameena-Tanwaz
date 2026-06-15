import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "iPhone 12",
      price: "67,999",
      category: "Mobiles",
      image: "https://picsum.photos/300?1",
    },
    {
      id: 2,
      name: "Boat Earbuds",
      price: "2,599",
      category: "Electronics",
      image: "https://picsum.photos/300?2",
    },
    {
      id: 3,
      name: "Cricket Bat",
      price: "1,300",
      category: "Sports",
      image: "https://picsum.photos/300?3",
    },
    {
      id: 4,
      name: "Laptop",
      price: "55,999",
      category: "Electronics",
      image: "https://picsum.photos/300?4",
    },
    {
      id: 5,
      name: "Kurti",
      price: "1,499",
      category: "Fashion",
      image: "https://picsum.photos/300?5",
    },
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <Navbar />

      <div className="products-container">
        <h1>All Products</h1>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("Fashion")}>Fashion</button>
          <button onClick={() => setCategory("Electronics")}>Electronics</button>
          <button onClick={() => setCategory("Mobiles")}>Mobiles</button>
          <button onClick={() => setCategory("Sports")}>Sports</button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;