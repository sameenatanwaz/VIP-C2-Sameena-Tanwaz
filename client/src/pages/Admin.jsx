import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        <div className="admin-cards">

          <Link to="/admin/products" className="admin-card">
            <h3>Manage Products</h3>
          </Link>

          <Link to="/admin/add-product" className="admin-card">
            <h3>Add Product</h3>
          </Link>

          <Link to="/admin/orders" className="admin-card">
            <h3>Manage Orders</h3>
          </Link>

          <Link to="/admin/users" className="admin-card">
            <h3>Manage Users</h3>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Admin;