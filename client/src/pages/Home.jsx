import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="banner">
        <h1>SUPER SALE</h1>
        <p>Shop Now</p>
      </div>

      <div className="categories">
        <div className="card">Fashion</div>
        <div className="card">Electronics</div>
        <div className="card">Mobiles</div>
        <div className="card">Groceries</div>
        <div className="card">Sports</div>
      </div>
    </>
  );
}

export default Home;