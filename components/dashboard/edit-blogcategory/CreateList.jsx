"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getBlogcategoryById, updateBlogcategoryAPI } from "../../../api/blogcategory";


const CreateList = () => {
  const params = useParams();
    console.log("Params:", params); // Debugging log
  
    const id = params?.id;
    console.log("Blogcategory ID:", id); // Debugging log
  
    const router = useRouter();
    const [blogcategory, setBlogcategory] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!id) return;
      
      const fetchBlogcategory = async () => {
        try {
          const data = await getBlogcategoryById(id);
          console.log("Fetched Blogcategory Data:", data); // Debugging log
          setBlogcategory({ title: data.data.title, status: data.data.status });
        } catch (error) {
          console.error("Error fetching Blogcategory:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlogcategory();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateBlogcategoryAPI(id, blogcategory);
        alert("Blogcategory updated successfully!");
        router.push("/cmswegrow/my-blogcategory");
      } catch (error) {
        alert("Failed to update Blogcategory.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setBlogcategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setBlogcategory((prev) => ({ ...prev, status: !prev.status }));
    };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="BlogcategoryTitle">Blog category Title</label>
          <input
        type="text"
        className="form-control"
        id="BlogcategoryTitle"
        name="title"
        value={blogcategory.title}
        onChange={handleChange}
      />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
        className="selectpicker form-select"
        data-live-search="true"
        data-width="100%"
        value={blogcategory.status ? "active" : "deactive"}
        onChange={(e) =>
          setBlogcategory((prev) => ({
            ...prev,
            status: e.target.value === "active",
          }))
        }
      >
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/cmswegrow/my-blogcategory'}>Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
