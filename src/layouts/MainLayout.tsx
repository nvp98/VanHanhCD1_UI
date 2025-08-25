import { Outlet, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  KeyOutlined,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { images } from "../assets/images";
import { useState, useRef } from "react";
import Sidebar from "./Sidebar";

const { logoHP } = images;

const MainLayout = () => {
  const navigate = useNavigate();
  const fullName = sessionStorage.getItem("HoTen") || "Người dùng";
  const maNV = sessionStorage.getItem("MaNV") || "";

  const [isSidebarPinned, setIsSidebarPinned] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const isSidebarOpen = isSidebarPinned || isSidebarHovered;

  const handleToggleSidebar = () => {
    setIsSidebarPinned(!isSidebarPinned);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const handleChangePassword = () => {
    console.log("Đổi mật khẩu");
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      setIsSidebarHovered(true);
    }, 150);
  };

  const handleSidebarLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      setIsSidebarHovered(false);
    }, 150);
  };

  const menuItems = [
    {
      key: "changePassword",
      label: "Đổi mật khẩu",
      icon: <KeyOutlined />,
      onClick: handleChangePassword,
    },
    {
      key: "logout",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Hover trigger zone */}
      {!isSidebarPinned && (
        <div
          className="fixed top-0 left-0 h-full w-2 z-30"
          onMouseEnter={handleMouseEnter}
        />
      )}

      {/* Sidebar – chỉ render component, không bọc div */}
      <Sidebar isOpen={isSidebarOpen} onMouseLeaveSidebar={handleSidebarLeave} />

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-500 ${
          isSidebarOpen ? "ml-52" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white text-gray-800 shadow-md">
          <div className="flex items-center gap-3">
            <img src={logoHP} alt="logo" className="h-10 w-auto object-contain" />
            <button
              onClick={handleToggleSidebar}
              className="text-xl text-gray-700 hover:text-blue-600 transition"
            >
              {isSidebarOpen ? <MenuOutlined /> : <RightOutlined />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end text-right text-sm font-medium">
              <span>{fullName}</span>
              {maNV && (
                <span className="text-xs text-gray-500">Mã NV: {maNV}</span>
              )}
            </div>
            <Dropdown
              menu={{ items: menuItems }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <div className="w-9 h-9 rounded-full bg-white-100 border text-blue-600 flex items-center justify-center cursor-pointer hover:shadow transition">
                <UserOutlined />
              </div>
            </Dropdown>
          </div>
        </header>

        {/* Body & Footer */}
        <div className="flex-1 flex flex-col mt-16 overflow-hidden h-[calc(100vh-4rem)]">
          <main
            className={`flex-1 overflow-auto ${
              isSidebarOpen ? "pt-3 pr-4 pb-4" : "pt-3 px-6 pb-4"
            }`}
          >
            <Outlet context={{ isSidebarOpen }} />
          </main>
          <footer className="py-1 px-2 bg-white text-center text-gray-500 text-[11px] border-t">
            © {new Date().getFullYear()} Phòng CNTT&CĐS @HOAPHATDUNGQUAT
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;