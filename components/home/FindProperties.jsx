// 'use client'
import Link from "next/link";
// import findProperties from "../../data/findProperties";
import Image from "next/image";
// import { countPropertiesByCity } from "../../api/frontend/city";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

const FindProperties = ({findcities}) => {
    // const [findcities, setFindCities] = useState([]);
    //     const router = useRouter();
      
        // const fetchFindCities = async () => {
        //   const data = await countPropertiesByCity();
        //   // console.log("citydata")
        //   // console.log(data)
        //   setFindCities(data.data);
        // };
        // useEffect(() => {
        //   fetchFindCities();
        // }, []); 
  return (
    <>
      {findcities?.slice(0, 4).map((item,index) => (
       <div className={`${  index  === 1 ? 'col-lg-8 col-xl-8' : index  === 2  ? 'col-lg-8 col-xl-8 3' : 'col-lg-4 col-xl-4' }`}
       key={item.cityId}
     >
      <Link href={`/property-list?city=${item.cityId}`} className="properti_city d-block">
            <div className="thumb">
              <Image
                width={752}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={
                  item.citylogoimage
                    ? `${process.env.NEXT_PUBLIC_API_URL}${item.citylogoimage}`
                    : "/default-placeholder.jpg"
                }
                alt= {`${item.cityName}${index + 1}${item.citylogoimage}`}
                unoptimized // Optional: disables Next.js image optimization (useful if external images)
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.cityName}</h4>
                <p>{item.propertyCount} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
