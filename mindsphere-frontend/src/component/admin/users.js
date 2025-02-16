import React, { useState, useEffect } from "react";
import axios from "axios";
import { isTokenValid } from "../../utils/tokenUtils";

const API_URL = process.env.REACT_APP_API_URL.trim();

const Users = () => {
  const [users, setUsers] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}"); // Ensure no null value

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found, cannot fetch users.");
          return;
        }

        if (!isTokenValid()) {
          return;
      }

        const response = await axios.get(`${API_URL}/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.users) {
          setUsers(response.data.users);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
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

      if (!isTokenValid()) {
        return;
    }

      await axios.put(
        `${API_URL}/admin/users/${id}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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

      if (!isTokenValid()) {
        return;
    }

      await axios.delete(`${API_URL}/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users">
      <h1>Admin Dashboard</h1>
      <p className="user-details">
        Here are the user details along with their designated roles, ensuring clarity in access control.
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
              <td>{index + 1}</td>
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
                  disabled={currentUser._id === user._id}
                >
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
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
