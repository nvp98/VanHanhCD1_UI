import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiService.interceptors.response.use(
  (response) => response.data, // <-- đây được hiểu đúng kiểu nếu không có @types/axios
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return Promise.reject({
        message: 'Phiên đăng nhập đã hết hạn.',
      });
    }
    return Promise.reject(error.response?.data || error);
  }
);

export default apiService;
