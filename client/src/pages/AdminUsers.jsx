import Navbar from "../components/Navbar";

function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Sameena",
      email: "sameena@gmail.com",
    },
    {
      id: 2,
      name: "Fatima",
      email: "fatima@gmail.com",
    },
    {
      id: 3,
      name: "Ayesha",
      email: "ayesha@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="admin-users-container">
        <h1>Manage Users</h1>

        <div className="admin-users-card">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>

              <button>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminUsers;