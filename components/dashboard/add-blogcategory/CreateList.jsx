"use client";

import { useState } from "react";
import { addBlogcategoryAPI } from "@/api/blogcategory";
const CreateList = () => {
   const [title, setTitle] = useState("");
    const [error, setError] = useState("");
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
    };
  
    const addBlogcategory = async (e) => {
      
      e.preventDefault();
  
      if (!title.trim()) {
        setError("Title is required");
        return;
      }
      // alert("testw")
      setError("");
      
      try {
        const data = await addBlogcategoryAPI(title); // 🔹 Call the API function
        console.log(data);
        alert(data.message);
  
        setTitle(""); // ✅ Reset input after success
      } catch (error) {
        setError(error.message); // ❌ Show error if request fails
      }
    };
  return (
    <>
    <form onSubmit={addBlogcategory} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="BlogcategoryTitle">Blog category Title</label>
          <input type="text" className="form-control" id="BlogcategoryTitle" value={title} onChange={handleTitleChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
