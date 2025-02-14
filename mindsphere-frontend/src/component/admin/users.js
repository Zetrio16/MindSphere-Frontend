import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Dummy data, replace with API call
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Ali Khan", email: "ali@example.com", role: "student" },
        { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "admin" }
      ];
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  return (
    <div className="users">
      <h1>User Details</h1>
      <p className="user-details">Here are the user details along with their designated roles, ensuring clarity in access control. This helps in managing permissions effectively within the system.</p>

      <p className="total-users">Total Users: {users.length}</p>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  className="form-select w-100"
                  style={{
                    backgroundColor: user.role === "admin" ? "#4A90E2" : "#F5A623",
                    color: "#ffffff",
                    fontWeight: "bold",
                    border: "none",
                  }}
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option
                    value="admin"
                    style={{ backgroundColor: "#4A90E2", color: "#ffffff" }}
                  >
                    Admin
                  </option>
                  <option
                    value="student"
                    style={{ backgroundColor: "#F5A623", color: "#ffffff" }}
                  >
                    Student
                  </option>
                </select>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Users;
