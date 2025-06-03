"use client"; 
import { useEffect, useState } from "react";
import TalktoExpert from "../common/TalktoExpert";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../common/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Link from "next/link";
import Image from "next/image";
import Team from "./Team";
import OurMission from "./OurMission";
import { getTestimonialTableData } from "@/api/frontend/testimonial";

const index = () => {
  const [showBox, setShowBox] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [testimonials, setFindTestimonial] = useState([]);
          // const router = useRouter();
        
          const fetchFindTestimonial = async () => {
            const data = await getTestimonialTableData();
            // console.log("data")
            // console.log(data)
            setFindTestimonial(data);
          };
          useEffect(() => {
            fetchFindTestimonial();
          }, []); 
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- About Text Content --> */}
      <section className="commited-to-excellence mt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="main-title text-center">
                <h2 className="mt0 color-main">Who We Are</h2>
                <h2 className="mt0 mb0">Committed to Excellence</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="who-we-are flex-column">
                <div>
                  <p>At <strong>WeGrow Infraventures Pvt Ltd,</strong> we pride ourselves on helping you find the perfect property that meets your budget. Specializing in projects across Gurgaon and Delhi NCR, we offer a tailored approach to home buying and property investment. With our expert team, we guide residential buyers and commercial investors through every step, ensuring they make the best real estate decisions. Let us help you secure your future with property investments that matter.</p>
                  <div className="view-all">
                    <Link href="#team" className="btn btn-primary">
                      <span className="title">Meet Our Team</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wegrow mtop-80">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="main-title text-center">
                <h2 className="mt0 color-main">Face of wegrow</h2>
                <h2 className="mt0">From the Founders' Desk</h2>
                
              </div>
            </div>
          </div> */}

          <div className="row">
            <OurMission />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">      
          <div className="row mt0">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
       {/* <!-- End Text Content --> */}

      {/* <!-- Our Team --> */}
      
      <section className="our-team bgc-f7 scroll-mt-80px" id="team">
        <div className="container">
          <div className="director-desk mt-0 pt-0">
                {/* <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="main-title text-center">
                      <h2 className="mt0 color-main">Who We Are</h2>
                      <h2 className="mt0 mb0">Committed to Excellence</h2>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-lg-4">
                    <div className="who-we-are">
                      <Image
                          width={1600}
                          height={1066}
                          className="img-fluid rounded-2"
                          src="/assets/images/about-us.webp"
                          alt="image"
                          />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="who-we-are">
                      
                          <div className="main-title text-left mb-2">
                            <h2>About CEO</h2>
                            <p>Expertise : Commercial Projects | Residential Projects | Real Estate Investment | Client-Centric Solutions</p>
                          </div>
                          <p>Mr. Ankit Goyat, the Founder & Chairman of WeGrow Infraventures, has been a driving force in transforming the real estate landscape. With over 7 years of experience, he has built a reputation for delivering client-centric, high-value real estate solutions in both residential and commercial sectors.</p>
                          <p>Under his visionary leadership, WeGrow Infraventures has redefined real estate consulting by integrating market</p>
                          {showFullBio && (
                            <>
                              <p>
                                
                                His approach is not just about transactions but about fostering long-term relationships with clients, investors, and partners.
                              </p>
                              <p>
                                Believing in “Transforming Spaces, Building Dreams,” Mr. Goyat ensures that every investment aligns with the client’s aspirations.
                                His commitment to integrity, market insights, and strategic investment planning has positioned WeGrow Infraventures as a trusted name in the industry.
                              </p>
                              <p>
                                With an unwavering focus on delivering value and wealth creation, he continues to guide clients toward profitable, future-ready real estate decisions,
                                making a lasting impact in an ever-evolving market.
                              </p>
                            </>
                          )}
                          <div className="view-all" style={{position:'static',transform:'none'}}>
                              <button
                                className="btn btn-primary"
                                onClick={() => setShowFullBio(!showFullBio)}
                              >
                                {showFullBio ? "Read Less" : "Read More"}
                              </button>
                          </div>
                        </div> 
                  </div>
                </div>
            </div>
          <div className="row mt-5">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Team</h2>
                <p>Experience excellence with our expert team.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section className="our-testimonial home5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2 className="color-white">Testimonials</h2>
                <p className="color-white">Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial testimonials={testimonials}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <TalktoExpert />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
          <Footer showBox={showBox} setShowBox={setShowBox} />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt15 pb15">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
