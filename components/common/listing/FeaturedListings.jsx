import Link from "next/link";
// import featureContent from "../../../data/properties";
import Image from "next/image";

const FeaturedListings = ({properties}) => {
  return (
    <>
      {properties?.slice(0, 3).map((item) => (
        <div className="media d-flex" key={item._id}>
          <Link href={`/property-detail/${item.slug}`}>
            <Image
              width={102}
              height={80}
              className="align-self-start me-3 w-100 h-100 cover"
              src={
                item.featuredimageurl
                  ? `${process.env.NEXT_PUBLIC_API_URL}${item.featuredimageurl}`
                  : "/default-placeholder.jpg"
              }
              alt= {`${item.title}`}
              unoptimized
            />
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/property-detail/${item.slug}`}>{item.title}</Link>
            </h5>
            <Link href={`/property-detail/${item.slug}`}>
              {item.price}
              
            </Link>

            <ul className="mb0">
                {item.categoryid._id=="67ea48d17cfa562fe8eaafd0" && (
              <li className="list-inline-item" key="1">
                <a href="#">
                Food court/restaurant: {item.foodcourt ? "Yes" : "No"}
                </a>
              </li>
              )}
              {item.categoryid._id=="67e67294759f85d6bf7a131a" && (
              <li className="list-inline-item" key="1">
                <a href="#">
                Beds: {item.bedrooms}
                </a>
              </li>
              )}
              
              {item.categoryid._id=="67ea48d17cfa562fe8eaafd0" && (
              <li className="list-inline-item" key="2">
                <a href="#">
                Multiplex: {item.multiplex ? "Yes" : "No"}
                </a>
              </li>
            )}
            {item.categoryid._id=="67e67294759f85d6bf7a131a" && (
              <li className="list-inline-item" key="2">
                <a href="#">
                Baths: {item.bathrooms}
                </a>
              </li>
            )}
                <li className="list-inline-item" key="3">
                  <a href={`/property-detail/${item.slug}`}>
                  Size: {item.areasize} {item.sizeprefix}
                  </a>
                </li>
                
                
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
