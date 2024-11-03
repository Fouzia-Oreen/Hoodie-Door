import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader />
        <main className="flex-1 flex bg-muted p-4 md:p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
