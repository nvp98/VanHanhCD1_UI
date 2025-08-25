import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import type { AppDispatch } from '../../store';
import { loginSuccess } from '../../store/authSlice';
import { showNotification } from '../../store/NotificationSlice';
import { useEffect, useState } from 'react';
import { images } from '../../assets/images';
import axios from 'axios';

const { backgroundHP, logoHP } = images;
const { Title } = Typography;

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      navigate("/", { replace: true }); // Nếu đã đăng nhập → chuyển về trang chủ
    }

    const timeout = setTimeout(() => setShowForm(true), 100);
    return () => clearTimeout(timeout);
  }, [navigate]);



  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        username: values.username,
        password: values.password
      });
      console.log('Login API response:', res.data);
      const { accessToken, refreshToken, user } = res.data;

      // Lưu token và thông tin người dùng
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      sessionStorage.setItem("IDNguoiDung", user.idNguoiDung);
      sessionStorage.setItem("TenDangNhap", user.tenDangNhap);
      sessionStorage.setItem("HoTen", user.hoTen || "");
      sessionStorage.setItem("MaNV", user.maNV || "");
      sessionStorage.setItem("IDQuyen", user.idQuyen);
      sessionStorage.setItem("TenQuyen", user.tenQuyen || "");


      // Redux login
      dispatch(loginSuccess(user.TenDangNhap));
      dispatch(showNotification({
        message: 'Đăng nhập thành công',
        description: `Chào mừng ${user.hoTen || user.tenDangNhap}!`,
        type: 'success'
      }));


      navigate(from, { replace: true });
    } catch (err: any) {
      dispatch(showNotification({
        message: 'Đăng nhập thất bại',
        description: err?.response?.data || 'Lỗi không xác định',
        type: 'error'
      }));
    }
  };


  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundHP})` }}
    >
      <div
        className={`bg-white/95  backdrop-blur-md shadow-xl rounded-[20px] p-8 w-[420px] max-w-full transition-all duration-1000 ${showForm ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
      >
        {/* Logo và tên công ty */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <img
            src={logoHP}
            alt="logo"
            className="object-contain w-[100px] h-[100px] -translate-y-10"
          />
          <h4 className="text-center font-medium text-sm sm:text-sm uppercase -translate-y-5">
            CÔNG TY CỔ PHẦN THÉP HÒA PHÁT DUNG QUẤT
          </h4>

        </div>
        <p
          className="text-center font-bold text-base text-blue-600 sm:text-lg uppercase -translate-y-5"
        >
          HỆ THỐNG QUẢN LÝ DỮ LIỆU NHÀ MÁY
        </p>
        <Title level={4} className="text-xl font-bold mb-10  text-center uppercase">
          ĐĂNG NHẬP
        </Title>

        <Form
          name="login_form"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <div className="w-[320px] mx-auto ">
            <Form.Item
              name="username"
              label="Tài khoản"
              rules={[{ required: true, message: 'Vui lòng nhập mã nhân viên!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Mã nhân viên"
                className="py-2"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                className="py-2"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" className="mb-4">
              <Checkbox>Ghi nhớ tài khoản</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full font-semibold">
                Đăng nhập
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
