import { NavLink } from "react-router-dom";
import { images } from '../assets/images';
import { useState } from "react";
const { iconDocumentWhite, iconDocument } = images;

type SidebarProps = {
  isOpen: boolean;
  onMouseLeaveSidebar: () => void;
};

type SidebarItemProps = {
  id?:string;
  to: string;
  label: string;
  iconActive: string;
  iconInactive: string;
  subMenu?: SidebarItemProps[];
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const toggleSubMenu = (menuLabel: string) => {
    setOpenMenu(openMenu === menuLabel ? null : menuLabel);
  };
  const menuList = [
    {
      id:"thieuket",
      to: "",
      label: "Thiêu Kết Vê Viên",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
      subMenu: [
        {
          to: "/thieuketveviens",
          label: "Biểu Mẫu",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
        {
          to: "/equipment",
          label: "Thiết Bị",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
      ],
    },
    {
      id:"nguyenlieu",
      to: "",
      label: "Nguyên Liệu",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
      subMenu: [
        {
          to: "/nguyenlieus",
          label: "Biểu mẫu",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
        {
          to: "/equimentnguyenlieus",
          label: "Thiết bị",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
        {
          to: "/tramdiennguyenlieus",
          label: "Trạm điện",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
      ],
    },
    {
      id:"luyencoc",
      to: "",
      label: "Luyện Cốc",
      iconActive: iconDocumentWhite,
      iconInactive: iconDocument,
      subMenu: [
        {
          to: "/luyencocs",
          label: "Biểu Mẫu",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
        {
          to: "/equipmentsluyencoc",
          label: "Thiết Bị",
          iconActive: iconDocumentWhite,
          iconInactive: iconDocument,
        },
      ],
    },
  ];
  return (
    <aside
      onMouseLeave={onMouseLeaveSidebar}
      className={`bg-white shadow-md w-66 p-4 h-screen fixed top-0 left-0 z-40 pt-16 transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
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
            <li key={item.id}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(item.label)}
                    className={`w-full flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 
                      ${openMenu === item.label ? "bg-[#05428c] text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-[#05428c]"
                      }`}
                  >
                    <div className="flex items-center">
                      <img
                        src={openMenu === item.label ? item.iconActive : item.iconInactive}
                        alt={`${item.label} icon`}
                        className={`w-5 h-5 object-contain mr-2 transition-transform duration-200 ${openMenu === item.label ? "scale-110" : "scale-100"}`}
                      />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs">
                      {openMenu === item.label ? "▾" : "▸"}
                    </span>
                  </button>
                  {openMenu === item.label && (
                    <ul className="ml-6 mt-3 space-y-2 border-l border-gray-300 pl-3 text-[11px]">
                      {item.subMenu.map((sub) => (
                        <li key={sub.to}>
                          <SidebarItem {...sub} />
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                 <SidebarItem {...item} />
              )
            }
            </li>
          ))}
        </ul>
        <div className="tracking-wide border-b pb-1">
          
        </div>
        <NavLink
          to="/warning-history"
          className={({ isActive }) =>
            `text-xs font-extrabold uppercase ${isActive ? "text-[#05428c]" : "text-gray-800 hover:text-blue-600"
            }`
          }
        >

          Lịch sử cảnh báo
        </NavLink>
      </nav>

    </aside>
  );
};

export default Sidebar;
