import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h2>Login</h2>

          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />

          <button>Login</button>

          <p>Don't have an account? Register</p>
        </div>
      </div>
    </>
  );
}

export default Login;