import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const Dashboard = () => {
  const [admins, setAdmins] = useState([
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      phone: "123-456-7890",
      status: "active",
      createdAt: "2023-05-10T10:30:00Z",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Admin",
      phone: "987-654-3210",
      status: "inactive",
      createdAt: "2023-06-15T14:00:00Z",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Admin",
      phone: "456-789-1234",
      status: "active",
      createdAt: "2023-07-20T09:45:00Z",
    },
  ]);

  useEffect(() => {
    // const fetchAdmins = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5000/api/admins");
    //     setAdmins(response.data);
    //   } catch (error) {
    //     console.error("Error fetching admin details:", error);
    //   }
    // };

    // fetchAdmins();
  }, []);

  return (
    <div className="container admin-dashboard">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <p className="admin-text">These are the administrators who have access to manage the system. Admin has specific roles and permissions, allowing them to oversee operations, manage users, and perform administrative tasks as required.</p>
      <div className="row">
        {admins.map((admin, index) => (
          <div key={index} className="col-lg-4 col-md-4">
            <div className="card mb-4 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{admin.name}</h5>
                <p className="card-text"><strong>Email:</strong> {admin.email}</p>
                <p className="card-text"><strong>Role:</strong> {admin.role}</p>
                <p className="card-text"><strong>Phone:</strong> {admin.phone}</p>
                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  <span className={`badge bg-${admin.status === "active" ? "success" : "secondary"}`}>
                    {admin.status}
                  </span>
                </p>
                <p className="card-text"><strong>Joined On:</strong> {new Date(admin.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
