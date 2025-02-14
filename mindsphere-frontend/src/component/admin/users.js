import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL.trim();

const Users = () => {
  const [users, setUsers] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user")); // Get logged-in user info

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (id, newRole) => {
    if (currentUser._id === id) {
      alert("You cannot change your own role.");
      return;
    }

    const confirmChange = window.confirm("Are you sure you want to change this user's role?");
    if (!confirmChange) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_URL}/admin/users/${id}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state after successful API call
      setUsers(users.map(user => (user._id === id ? { ...user, role: newRole } : user)));
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleDelete = async (id) => {
    if (currentUser._id === id) {
      alert("You cannot delete your own account.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove user from state after successful deletion
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users">
      <h1>Admin Dashboard</h1>
      <p className="user-details">
        Here are the user details along with their designated roles, ensuring clarity in access control. This helps in
        managing permissions effectively within the system.
      </p>

      <p className="total-users">Total Users: {users.length}</p>

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td> {/* Show index number instead of user ID */}
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
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  disabled={currentUser._id === user._id} // Disable role change for self
                >
                  <option value="admin" style={{ backgroundColor: "#4A90E2", color: "#ffffff" }}>
                    Admin
                  </option>
                  <option value="student" style={{ backgroundColor: "#F5A623", color: "#ffffff" }}>
                    Student
                  </option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                  disabled={currentUser._id === user._id}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
