import { Link } from "react-router-dom";

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <Link to="/cart">
        <button>Add To Cart</button>
      </Link>
    </div>
  );
}

export default ProductCard;