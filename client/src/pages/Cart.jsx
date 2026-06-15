import Navbar from "../components/Navbar";

function Cart() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Shopping Cart
        </h1>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>iPhone 12</h2>
            <p>Price: ₹67,999</p>
            <p>Quantity: 1</p>
            <button>Remove</button>
          </div>

          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>Laptop</h2>
            <p>Price: ₹55,999</p>
            <p>Quantity: 1</p>
            <button>Remove</button>
          </div>

          <h2>Total: ₹1,23,998</h2>

          <button
            style={{
              padding: "12px 25px",
              marginTop: "20px",
              background: "#00c6ff",
              border: "none",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;