import Navbar from "../components/Navbar";

function AdminProducts() {
  const products = [
    {
      id: 1,
      name: "iPhone 12",
      price: "₹67,999",
    },
    {
      id: 2,
      name: "Laptop",
      price: "₹55,999",
    },
    {
      id: 3,
      name: "Boat Earbuds",
      price: "₹2,599",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", color: "white" }}>
        <h1 style={{ textAlign: "center" }}>
          Manage Products
        </h1>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "900px",
            margin: "30px auto",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>

              <div>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminProducts;