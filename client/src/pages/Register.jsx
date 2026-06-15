import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h2>Register</h2>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <select>
            <option>User Type</option>
            <option>Customer</option>
            <option>Admin</option>
          </select>

          <button>Register</button>

          <p>Already registered? Login</p>
        </div>
      </div>
    </>
  );
}

export default Register;