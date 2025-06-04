"use client";
import { useState } from "react";
import Image from "next/image";

const WhyChoose = ({ style = "" }) => {
  const [expanded, setExpanded] = useState({
    mission: false,
    vision: false,
    commitment: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Mission */}
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className={`why_chose_us ${style}`}>
          <div className="icon">
            <Image
              width={60}
              height={60}
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/mission.svg`}
              // src="/assets/images/mission.svg"
              alt="Mission"
            />
          </div>
          <div className="details">
            <h4>Our Mission</h4>
            <p className={`description ${expanded.mission ? "expanded" : "collapsed"}`}>
              At WeGrow Infraventures Pvt Ltd, our mission is clear: to provide
              the best real estate consulting services that empower our clients
              to make informed decisions. We understand that real estate
              transactions can be complex and stressful, but our goal is to
              simplify the process for you. By offering expert consultancy
              services tailored to your specific needs, we ensure that you
              achieve your property goals with ease. We are committed to
              excellence in every aspect of our work, ensuring that you get the
              most value out of your real estate investments.
            </p>
            <button onClick={() => toggleExpand("mission")} className="btn-link">
              {expanded.mission ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className={`why_chose_us ${style}`}>
          <div className="icon">
            <Image
              width={60}
              height={60}
              className="img-fluid"
              // src="/assets/images/vision.svg"
              src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/vision.svg`}
              alt="Vision"
            />
          </div>
          <div className="details">
            <h4>Our Vision</h4>
            <p className={`description ${expanded.vision ? "expanded" : "collapsed"}`}>
              As we look ahead, our vision is to grow into the most trusted
              name in real estate consulting within Gurgaon and Delhi NCR. We
              aspire to become a company known for delivering results, offering
              innovative solutions, and setting new benchmarks in client
              satisfaction. Over the next 5-10 years, our goal is to expand our
              services, reach more clients, and continue providing top-tier
              consulting that makes property buying and investing a rewarding
              experience for everyone.
            </p>
            <button onClick={() => toggleExpand("vision")} className="btn-link">
              {expanded.vision ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className={`why_chose_us ${style}`}>
          <div className="icon">
            <Image
              width={60}
              height={60}
              className="img-fluid"
              // src="/assets/images/commit.svg"
              src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/commit.svg`}
              alt="Commitment"
            />
          </div>
          <div className="details">
            <h4>Our Commitment</h4>
            <p className={`description ${expanded.commitment ? "expanded" : "collapsed"}`}>
              At WeGrow Infraventures Pvt Ltd, we are committed to one thing:
              your success. Whether you are looking for a new home, an
              investment opportunity, or expert real estate advice, we are here
              to guide you every step of the way. Trust us to help you make the
              right decisions and secure the best deals in the market.

              Partner with WeGrow Infraventures Pvt Ltd today and take the first
              step toward realizing your real estate goals. Whether you’re
              buying, selling, or investing, we’re here to make the journey
              smooth and successful. Reach out to us today and let’s build your
              future together.
            </p>
            <button onClick={() => toggleExpand("commitment")} className="btn-link">
              {expanded.commitment ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

