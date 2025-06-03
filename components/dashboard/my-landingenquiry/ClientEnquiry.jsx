

"use client"; // Add this at the top
import Image from "next/image";
import { getLandingEnquiryTableData } from "@/api/landingenquiry";
import { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";

const AuthorReview = () => {
  const [enquiryList, setEnquiryList] = useState([]);
  const fetchEnquiryData = async () => {
        const data = await getLandingEnquiryTableData();
        console.log("dataenquiryList")
        console.log(data)
        setEnquiryList(data);
      };
  
  useEffect(() => {
    fetchEnquiryData();
  }, []); 
  return (
    <>
      {enquiryList.map((item) => (
        <div className="media mt30" key={item.id}>
          
          <div className="media-body">
            <h5 className="review_title mt-0">
              
             
               <div> <span className="text-thm">Name: {item.name}</span></div>
               <div> <span className="text-thm">Email: {item.email}</span> </div>
              
              <span className="sspd_review float-end">
                Enquiry At: {new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
                </span>
            </h5>
            <a className="review_date" href="#">
            For Landing page: {item?.landingpageid?.title}
            </a>
            {/* <p className="para">{item.message}</p> */}

           
          </div>
        </div>
      ))}
    </>
  );
};

export default AuthorReview;
