import AdminNav from "./adminNav"; 
import Sidebar from "./sidebar";  
import { Outlet } from "react-router-dom"; 

const AdminLayout = () => {
  return (
    <>
      <AdminNav />
      <Sidebar />
      <div className="admin-content">
        <Outlet />  
      </div>
    </>
  );
};

export default AdminLayout;
