import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-7 col-xl-6">
        <div className="about_content">
          <h2 className="mt0 color-main">About WeGrow Infraventures</h2>
          <h4 className="mt0 mb0">Expertise : Commercial Projects | Residential Projects | Real Estate Investment | Client-Centric Solutions</h4>
          <p>
          <strong>WeGrow Infraventures Pvt Ltd</strong> was founded with the vision of becoming the leading real estate consultancy in Gurgaon and Delhi NCR, offering personalized and result-oriented solutions. From day one, our mission has been to understand the unique needs of our clients and provide property solutions that align with their expectations, budgets, and long-term goals. Whether it’s a first-time homebuyer seeking their dream home or an investor looking for profitable opportunities, we ensure a seamless experience.
          </p>
          <p>Our team of experienced professionals combines in-depth market knowledge with a client-centric approach to deliver exceptional results. We prioritize trust, transparency, and long-term relationships built on mutual success.</p>
          <p>With expertise in the Gurgaon and Delhi NCR markets, <strong>WeGrow Infraventures Pvt Ltd</strong> helps buyers and investors make informed decisions. Our consulting services are tailored to meet individual financial objectives, ensuring maximum value and transparency throughout the process. Whether you are new to real estate or a seasoned investor, we connect you with the right properties.</p>
          <p>Our vision is to establish ourselves as the most trusted property consulting firm in the region, known for integrity and transparency. At <strong>WeGrow</strong>, we are committed to empowering our clients with expert guidance, delivering exceptional value, and fostering relationships that stand the test of time.</p>

          {/* <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-5 col-xl-5 offset-xl-1 ms-auto">
        <div className="about_thumb">
          <Image
            width={461}
            height={750}
            priority
            className="w100 cover"
            src="/assets/images/about/head.webp"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div> */}
    </>
  );
};

export default OurMission;
