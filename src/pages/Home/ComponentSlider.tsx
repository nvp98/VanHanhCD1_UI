import React, { useEffect, useRef, useState } from "react";
import { images } from '../../assets/images';
const { anToanMot, anToanHai, anToanBa, anToanBon, anToanNam, anToanSau, iconLeft, iconRight } = images;

type Product = {
    name: string;
    image: string;
};

const products: Product[] = [
    {
        name: "Đề phòng đuối nước khi làm việc tại cảng",
        image:anToanMot,
    },
    {
        name: "Đề phòng khi làm việc trên cao",
        image: anToanHai,
    },
    {
        name: "Đề phòng khi làm việc trong không gian hạn chế",
        image: anToanBa,
    },
    {
        name: "Đề phòng khi làm việc với thiết bị điện",
        image: anToanBon,
    },
    {
        name: "Đề phòng tai nạn từ cần trục, cẩu trục",
        image: anToanNam,
    },
    {
        name: "Đề phòng khi vận hành lò, thiết bị cẩu trục",
        image: anToanSau,
    },
];

const ComponentSlider: React.FC = () => {
    const [index, setIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const cardWidth = 288;

    const slide = (direction: number) => {
        let newIndex = index + direction;
        if (newIndex >= products.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = products.length - 1;
        }
        setIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: newIndex * cardWidth,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => slide(1), 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div >
            <div className="max-w-6xl container mx-auto px-4">
                <h1 className=" font-extrabold text-skin-inverted sm:text-2xl  text-center text-2xl mb-2">An toàn hôm nay, vững vàng ngày mai</h1>


                <div className="relative">
                    <button
                        onClick={() => slide(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#2a65ad] text-gray-800 rounded-full p-2 shadow-lg z-10"
                    >
                        <img
                            src={`${iconLeft}`}
                            alt="logo"
                            className="object-contain w-[32px] h-[32px]"
                        />
                    </button>
                    <button
                        onClick={() => slide(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2a65ad]  text-gray-800 rounded-full p-2 shadow-lg z-10"
                    >
                        <img
                            src={`${iconRight}`}
                            alt="logo"
                            className="object-contain w-[32px] h-[32px]"
                        />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            ref={carouselRef}
                            className="carousel-container flex gap-6 overflow-x-auto py-8 px-2 scroll-smooth"
                        >
                            {products.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="product-card flex-none w-[380px] bg-skin-button-accent rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
                                >
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-[550px] object-cover"
                                        />

                                    </div>
                                    <div className="p-2 ">
                                        <a href="#" className="text-lg font-semibold">
                                            {product.name}
                                        </a>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentSlider;
