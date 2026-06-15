import Navbar from "../components/Navbar";

function AdminOrders() {
  const orders = [
    {
      id: 1,
      user: "Sameena",
      product: "iPhone 12",
      status: "Delivered",
    },
    {
      id: 2,
      user: "Ayesha",
      product: "Laptop",
      status: "Pending",
    },
    {
      id: 3,
      user: "Fatima",
      product: "Boat Earbuds",
      status: "Shipped",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="admin-products-container">
        <h1>Manage Orders</h1>

        <div className="admin-products-list">
          {orders.map((order) => (
            <div className="admin-product-item" key={order.id}>
              <div>
                <h3>{order.product}</h3>
                <p>User: {order.user}</p>
                <p>Status: {order.status}</p>
              </div>

              <button>Update Status</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminOrders;