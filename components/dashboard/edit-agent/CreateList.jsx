"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getAgentById, updateAgentAPI } from "../../../api/agent";


const CreateList = () => {
  const params = useParams();
    console.log("Params:", params); // Debugging log
  
    const id = params?.id;
    console.log("Agent ID:", id); // Debugging log
  
    const router = useRouter();
    const [agent, setAgent] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!id) return;
      
      const fetchAgent = async () => {
        try {
          const data = await getAgentById(id);
          console.log("Fetched Agent Data:", data); // Debugging log
          setAgent({ title: data.data.title, status: data.data.status });
        } catch (error) {
          console.error("Error fetching Agent:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAgent();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateAgentAPI(id, agent);
        alert("Agent updated successfully!");
        router.push("/cmswegrow/my-agent");
      } catch (error) {
        alert("Failed to update Agent.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setAgent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setAgent((prev) => ({ ...prev, status: !prev.status }));
    };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="agentTitle">Agent Title</label>
          <input
        type="text"
        className="form-control"
        id="agentTitle"
        name="title"
        value={agent.title}
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
        value={agent.status ? "active" : "deactive"}
        onChange={(e) =>
          setAgent((prev) => ({
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
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/cmswegrow/my-agent'}>Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
