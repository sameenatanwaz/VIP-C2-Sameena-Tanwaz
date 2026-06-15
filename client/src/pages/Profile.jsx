import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          User Profile
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
          <h3>Name: Sameena</h3>
          <p>Email: sameena@gmail.com</p>

          <hr style={{ margin: "20px 0" }} />

          <h2>Your Orders</h2>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "15px",
            }}
          >
            <h3>Carrom Board</h3>
            <p>Quantity: 1</p>
            <p>Price: ₹1999</p>
            <button>Cancel Order</button>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "15px",
            }}
          >
            <h3>Cricket Bat</h3>
            <p>Quantity: 1</p>
            <p>Price: ₹1300</p>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;