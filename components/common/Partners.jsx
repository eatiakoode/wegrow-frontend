'use client'

import Image from "next/image";
import Slider from "react-slick";

const Partners = ({builderList}) => {
  // const partnersImages = ["adani", "aipl", "ambience", "conscient", "emaar", "godrej", "centralpark", "dlf", "elan", "m3m", "mahindra", "omaxe2", "shapoorji"];

 const partnersImages = builderList;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // adjust based on your design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {partnersImages.map((item, i) => (
        <div className="item" key={i}>
          <div className="our_partner text-center">
            <a href={`/builder/${item.slug}`}>
            <Image
              width={150}
              height={150}
              className="contain"
               src={
              item.logoimage
                ? `${process.env.NEXT_PUBLIC_API_URL}${item.logoimage}`
                : `${process.env.NEXT_PUBLIC_API_URL}public/assets/images/thumbnail.webp`
            }
            alt= {`${item.title}`}
            unoptimized // Optional: disables Next.js image optimization (useful if external images)
              // src={`/assets/images/partners/${val}.webp`}
            /></a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Partners;








