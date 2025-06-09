"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { addTestimonialAPI } from "../../../api/testimonial";
const CreateList = () => {
  const router = useRouter();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [designation, setDesignation] = useState("");
   
    const [error, setError] = useState("");
    const [logo, setLogo] = useState(null);

    // upload profile
    const uploadLogo = (e) => {
        setLogo(e.target.files[0]);
    };
  
   
  
    const addTestimonial = async (e) => {
      e.preventDefault();
    
      if (!title.trim()) {
        setError("Title is required");
        return;
      }
    
      setError("");
    
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("designation", designation);
        formData.append("description", description);
        if (logo) {
          formData.append("logo", logo);
        }
        
    // console.log("formDataend")
    // console.log(formData)
        const data = await addTestimonialAPI(formData); // Use FormData here
        console.log(data);
        router.push("/cmswegrow/my-testimonial");
        alert(data.message);
    
        setTitle("");
        setDescription("");
        setLogo(null);
      } catch (error) {
        setError(error.message);
      }
    };
    
    
  return (
    <>
    <form onSubmit={addTestimonial} className="row">
    <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={uploadLogo}
                    />
                    <label
                        style={
                            logo !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          logo
                                      )})`,
                                  }
                                : undefined
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="TestimonialTitle">Testimonial Title</label>
          <input type="text" className="form-control" id="TestimonialTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
       {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="Testimonialdesignation">Testimonial designation</label>
          <input type="text" className="form-control" id="Testimonialdesignation" value={designation}  onChange={(e) => setDesignation(e.target.value)}  />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-12">
          <div className="my_profile_setting_textarea form-group">
            <label htmlFor="TestimonialDescription">Description</label>
            <textarea id="TestimonialDescription" className="form-control" rows="7"  value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter Testimonial description"></textarea>
            {error.description && <span className="text-danger">{error.description}</span>}
          </div>
          
        </div>
        

      {/* End .col */}
      <div className="col-lg-6 col-xl-6 d-none">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="1">Active</option>
            <option data-tokens="2">Deactive</option>
          </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/cmswegrow/my-dashboard'}>Back</button>
          <button type="submit" className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
