import { NavLink } from "react-router-dom";
import { images } from '../assets/images';
const { iconDocumentWhite, iconDocument } = images;

type SidebarProps = {
  isOpen: boolean;
  onMouseLeaveSidebar: () => void;
};

type SidebarItemProps = {
  to: string,
  label: string,
  iconActive: string,
  iconInactive: string
};

const SidebarItem = ({ to, label, iconActive, iconInactive }: SidebarItemProps) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `block rounded-lg px-4 py-3 transition-all duration-200 ${isActive
        ? "bg-[#05428c] text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-[#05428c]"
      }`
    }
  >
    {({ isActive }) => (
      <div className="flex items-center">
        <img
          src={isActive ? iconActive : iconInactive}
          alt={`${label} icon`}
          className={`w-5 h-5 object-contain mr-2 transition-transform duration-200 ${isActive ? "scale-110" : "scale-100"
            }`}
        />
        <span>{label}</span>
      </div>
    )}
  </NavLink>
);


const Sidebar = ({ isOpen, onMouseLeaveSidebar }: SidebarProps) => {
  const menuList = [
    {
      to: "/thieuketveviens",
      label: "Thiêu Kết Vê Viên",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
    },
    {
      to: "/nguyenlieus",
      label: "Nguyên Liệu",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
    },
    {
      to: "/luyencocs",
      label: "Luyện Cốc",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
    },
  ];
  return (
    <aside
      onMouseLeave={onMouseLeaveSidebar}
      className={`bg-white shadow-md w-56 p-4 h-screen fixed top-0 left-0 z-40 pt-16 transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <nav className="flex flex-col gap-4 mt-10">
        {/* TRANG CHỦ */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xs font-extrabold uppercase ${isActive ? "text-[#05428c]" : "text-gray-800 hover:text-blue-600"
            }`
          }
        >

          Trang chủ
        </NavLink>

        {/* LABEL CĂN GIỮA */}
        <div className="text-xs font-extrabold text-[#05428c] uppercase tracking-wide border-b pb-1">
          Nhà Máy
        </div>

        {/* DANH MỤC */}
        <ul className="space-y-3 text-sm font-extrabold">
          {menuList.map((item) => (
            <li key={item.to}>
              <SidebarItem {...item} />
            </li>
          ))}
        </ul>

      </nav>

    </aside>
  );
};

export default Sidebar;
