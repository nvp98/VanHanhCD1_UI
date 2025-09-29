import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onMouseLeaveSidebar: () => void;
};

const Sidebar = ({ isOpen, onMouseLeaveSidebar }: SidebarProps) => {
  return (
    <aside
      onMouseLeave={onMouseLeaveSidebar}
      className={`bg-white shadow-md w-56 p-4 h-screen fixed top-0 left-0 z-40 pt-16 transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="flex flex-col gap-4">
  {/* TRANG CHỦ */}
  <NavLink
    to="/"
    className={({ isActive }) =>
      `text-base font-semibold ${
        isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
      }`
    }
  >
    Trang chủ
  </NavLink>

  {/* LABEL CĂN GIỮA */}
  <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide border-b pb-1 text-center">
    Nhật ký vận hành
  </div>

  {/* DANH MỤC */}
  <ul className="space-y-3 text-sm font-extrabold">
    <li>
      <NavLink
        to="/danhsach"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        Danh Sách Biểu Mẫu
      </NavLink>
    </li>
  </ul>
</nav>

    </aside>
  );
};

export default Sidebar;
