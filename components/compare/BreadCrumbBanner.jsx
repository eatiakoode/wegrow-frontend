import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
    <source 
    // src="/assets/images/background/frame-video.mp4"
    src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/background/frame-video.mp4`}
     type="video/mp4" />
  </video>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb className="tooltip-icon" data-tooltip="Compare" />
              <h4 className="breadcrumb_title">Compare</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;

