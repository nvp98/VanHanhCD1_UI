// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState } from '../../store';

const Home = () => {
  // const username = useSelector((state: RootState) => state.auth.username)
  // const dispatch = useDispatch()

  return (
    <div className="ml-64 mt-12 flex flex-col items-center justify-start text-center">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        TRANG CHỦ HỆ THỐNG DỮ LIỆU<br />NHÀ MÁY CƠ ĐIỆN 1
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Chào mừng bạn đến với hệ thống giám sát vận hành!
      </p>
    </div>
  );
};

export default Home;
