import Navbar from "../components/Navbar";

function AddProduct() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Add New Product
        </h1>

        <div
          style={{
            background: "white",
            color: "black",
            maxWidth: "500px",
            margin: "30px auto",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Product Name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Price"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Category"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Image URL"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#00c6ff",
              border: "none",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;