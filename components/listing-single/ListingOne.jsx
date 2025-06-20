'use client'

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import { useCompare } from "@/components/common/footer/CompareContext";


export default function ListingOne({property,setPropertySelectedComp, setShowBox,propertyimage }) {
  const { propertycompare, setPropertycompare } = useCompare();
  // console.log("eati");
  //   console.log(property?.images)
  //    console.log("sinha");
  const addCompareProperty = async (id) => {
    
      
    const isExist = propertycompare.includes(id);
  
    if (isExist) {
      alert("Already added for compare");
    } else if (propertycompare.length >= 3) {
      alert("You have already selected 3 products");
    } else {
      setPropertycompare((old) => [...old, id]);
      setShowBox(true);
    }
  };
  return (
    
    <section className="property_detaill_view listing-title-area mt85 md-mt0">
    <div className="container">
      <Gallery>
        <div className="row mb30">
          <div className="col-lg-7 col-xl-8">
            <div className="single_property_title d-flex justify-content-between align-items-center mt30-767">
              <div>
                <h2>{property?.title}</h2>
                <p>{property.cityid?.title}, {property.locationid?.title} {property.address}</p>
              </div>
              <div>
                <a href={`tel:${property?.sellerphone}`} className="circle-shape text-dark d-inline-block me-2">
                  <span className="flaticon-telephone"></span>
                </a>
                <a href={`mailto:${property?.selleremail}`} className="circle-shape text-dark d-inline-block">
                  <span className="flaticon-black-back-closed-envelope-shape"></span>
                </a>
              </div>
                
            </div>
           
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="single_property_social_share position-static transform-none">
              <div className="price float-start fn-400">
                <h2>
                  {property?.price}
                  {/* <small>/mo</small> */}
                </h2>
                <p>Best value in the area!</p>
              </div>

              <div className="spss style2 text-end tal-400">
                <ul className="mb0">
                  <li className="list-inline-item">
                  <a href="#" className="tooltip-icon" data-tooltip="Compare" onClick={(e) => {
                e.preventDefault();
                addCompareProperty(property._id);
              }}>
                <span className="flaticon-transfer-1"></span>
              </a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-heart"></span>
                    </a>
                  </li> */}
                  {/* <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-share"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-printer"></span>
                    </a>
                  </li> */}
                </ul>
              </div>
              {/* End activity and social sharing */}
            </div>
          </div>
        </div>
