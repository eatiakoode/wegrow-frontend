import BreadCrumb from "@/components/common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="residential_commercial inner_page_breadcrumb">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
      <source 
      src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/background/frame-video.mp4`}
      type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_content">
              {/* <BreadCrumb title="blog" />
              <h4 className="breadcrumb_title">Blogs</h4> */}
              <h1>Explore Residential & Commercial Properties for Sale and Rent</h1>
              <p>This clearly communicates the type of listings available (residential and commercial), and also includes useful <br/>keywords like "sale" and "rent" that are SEO-friendly.</p>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
