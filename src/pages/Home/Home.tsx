// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState } from '../../store';
import { images } from '../../assets/images';
import ComponentSlider from "./ComponentSlider"
const { backgroundHome, cardOne, cardTwo, anToanMot, anToanHai, anToanBa } = images;

const Home = () => {
  // const username = useSelector((state: RootState) => state.auth.username)
  // const dispatch = useDispatch()
  const factories = [
    { name: 'Phân Xưởng Thiêu Kết', image: backgroundHome },
    { name: 'Phân Xưởng Vê Viên', image: cardOne },
    { name: 'Phân Xưởng Vôi', image: cardTwo },
  ]

  const warning = [
    { name: 'Đề phòng đuối nước khi làm việc tại cảng', image: anToanMot },
    { name: 'Đề phòng khi làm việc trên cao', image: anToanHai },
    { name: 'Đề phòng khi làm việc trong không gian hạn chế', image: anToanBa },
  ]

  return (
    <div className="theme-swiss sm:m-6 space-y-6 px-6">
      <div className=" relative bg-skin-fill overflow-hidden sm:rounded-2xl">
        <img className="absolute inset-0 h-full w-full object-cover opacity-30" src={backgroundHome} alt="People working on laptops" />
        <div className="absolute inset-0 bg-gradient-to-br from-hue via-skin-hue to-transparent opacity-90"></div>
        <div className="relative mx-auto text-start py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
            <span className="block">Nhà máy cơ điện 1</span>
            <span className="block">Đối với Hòa Phát, quan trọng là bền vững</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-skin-muted">Hòa Phát là Tập đoàn sản xuất công nghiệp hàng đầu Việt Nam. Khởi đầu từ một Công ty chuyên buôn bán các loại máy xây dựng từ tháng 8/1992.</p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-start">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid  sm:gap-5">
              <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Xem biểu mẫu </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
          <span className="block">Xưởng nhà máy</span>
        </h2>
        <div className="mt-2 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
            {factories.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden  shadow-md group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-skin-base font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

        <ComponentSlider/>

      <hr
        className="my-12 h-px border-t-2 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent  dark:via-neutral-500" />


      <div className="theme-about  flex gap-[40px] flex-wrap  justify-center items-stretch content-center px-[200px]">

        <div className="flex-1"><img className="h-full object-cover" src={backgroundHome} alt="People working on laptops" /></div>
        <div className="flex-1">
          <div className="flex gap-[5px] flex-col">
            <div className="w-[50%]">
              <h2 className="text-2xl font-extrabold text-skin-inverted sm:text-2xl">
                <span className="block">VỀ CHÚNG TÔI</span>
              </h2>
            </div>
            <div className="w-full"> <p className="mt-4 text-lg leading-6 ">Nhà máy Cơ điện 1 là đơn vị thực hiện công tác bảo trì; sửa chữa, lắp đặt, gia công; hiệu
              chuẩn, kiểm định cho cụm thiết bị Nhà máy Nguyên liệu, Nhà máy Thiêu kết - Vê viên, Nhà
              máy Luyện cốc, Bộ phận Cảng và Công ty Cổ phần Cảng tổng hợp Hòa Phát được hoạt động.Đảm bảo, tăng cường tính sẵn sàng thiết bị, nâng cao tuổi thọ của thiết bị trong quá trình
              sử dụng và hạn chế những sự cố rủi ro thiết bị gây ra.Đảm bảo phục vụ sản xuất an toàn, vệ sinh môi trường, tiết kiệm và đạt hiệu quả cao
              nhất
              ổn định, đảm bảo sản xuất</p></div>
            <div className="sm:flex sm:justify-start mt-3">
              <div className="space-y-4 sm:space-y-0 sm:inline-grid  sm:gap-5">
                <a href="#" className="text-cyan-50 bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Xem biểu mẫu </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        

    </div>
  );
};

export default Home;
