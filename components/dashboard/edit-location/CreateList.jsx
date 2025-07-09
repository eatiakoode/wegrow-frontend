"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getLocationById, updateLocationAPI } from "@/api/location";

import { getCityTableData,getCityByStateTableData } from "@/api/city";
import { getCountryTableData } from "@/api/country";
import { getStateByCountryTableData } from "@/api/state";
import { toast } from 'react-toastify';


const CreateList = () => {
  const params = useParams();
  
    const id = params?.id;
  
    const router = useRouter();
    const [location, setLocation] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [status, setStatus] = useState("");
    const [locationlogo, setLocationLogo] = useState(null);
    const [locationlogoimage, setLocationLogoImage] = useState(null);
    const [selectedState, setSelectedState] = useState("");
    const [title, setTitle] = useState("");
   
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const uploadLogo = (e) => {
      setLocationLogo(e.target.files[0]);
      setLocationLogoImage("")
  };
  
    // useEffect(() => {
    //   if (!id) return;
      
    //   const fetchLocation = async () => {
    //     try {
    //       const data = await getLocationById(id);
    //       console.log("Fetched Location Data:", data); // Debugging log
    //       setLocation({ title: data.data.title, status: data.data.status });
    //       setSelectedCity(data.data.cityid);
    //     } catch (error) {
    //       console.error("Error fetching Location:", error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchLocation();
    //   const fetchCities = async () => {
    //     try {
    //       const response = await getCityTableData();
    //       console.log("response")
    //       console.log(response)
  
    //       setCities(response || []);
    //     } catch (err) {
    //       console.error("Error fetching cities:", err);
    //     }
    //   };
  
    //   fetchCities();
    // }, [id]);
    useEffect(() => {
          if (!id) return;
        
          const fetchCityAndCountryData = async () => {
            try {
              const [locationRes, countriesRes] = await Promise.all([
                getLocationById(id),
                getCountryTableData()
              ]);
        
              const locationData = locationRes.data;
              // setLocation({
              //   title: locationData.title,
              //   status: locationData.status,
              //   countryid: locationData.countryid,
              //   stateid: locationData.stateid,
              //   cityid: locationData.cityid,
              // });
              setTitle(locationData.title)
              setStatus(locationData.status)
        
              setSelectedCountry(locationData.countryid);
              setSelectedState(locationData.stateid);
              setSelectedCity(locationData.cityid);
              setCountries(countriesRes || []);
              console.log("data.data.locationlogoimage")
              console.log(locationData.locationlogoimage)
              if(locationData.locationlogoimage) {
                setLocationLogoImage(process.env.NEXT_PUBLIC_API_URL+locationData.locationlogoimage)
              }
        
              // ✅ Fetch states AFTER setting selectedCountry
              const statesRes = await getStateByCountryTableData(locationData.countryid);
              setStates(statesRes.data || []);
              const cityRes = await getCityByStateTableData(locationData.stateid);
              setCities(cityRes.data || []);
            } catch (error) {
              console.error("Error fetching city/country/state data:", error);
            } finally {
              setLoading(false);
            }
          };
        
          fetchCityAndCountryData();
        }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // const updatedLocation = {
        //   ...location,
        //   cityid: selectedCity,
        // };
        const formData = new FormData();
        formData.append("title", title);
        formData.append("countryid", selectedCountry);
        formData.append("stateid", selectedState);
        formData.append("cityid", selectedCity);

        formData.append("status", status);
        if (locationlogo) {
          formData.append("locationlogo", locationlogo);
        }
        const data = await updateLocationAPI(id, formData);
        toast.success(data.message);
        if(data.status=="success"){
         setTimeout(() => {
          router.push("/cmswegrow/my-location");
          }, 1500); 
        }
        // alert("Location updated successfully!");
        // router.push("/cmswegrow/my-location");
      } catch (error) {
        alert("Failed to update Location.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setLocation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setLocation((prev) => ({ ...prev, status: !prev.status }));
    };
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
      // console.log("cahnegvalue"+e.target.value)
      const fetchState = async (countryid) => {
        try {
          const response = await getStateByCountryTableData(countryid);
          // console.log("response")
          // console.log(response)
  
          setStates(response.data || []);
        } catch (err) {
          console.error("Error fetching state:", err);
        }
      };
      fetchState(e.target.value)
    };
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
      const fetchCity = async (stateid) => {
        try {
          const response = await getCityByStateTableData(stateid);
          // console.log("response")
          // console.log(response)
  
          setCities(response.data || []);
        } catch (err) {
          console.error("Error fetching state:", err);
        }
      };
      fetchCity(e.target.value)
    };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg, image/webp, image/avif"
                        onChange={uploadLogo}
                    />
                   <label
                      htmlFor="image1"
                      style={
                        locationlogoimage                          
                        ? { backgroundImage: `url(${locationlogoimage})` }
                          : locationlogo
                          ? { backgroundImage: `url(${URL.createObjectURL(locationlogo)})` }
                          : undefined
                      }
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
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="countrySelect">Select Country</label>
            <select
              id="countrySelect"
              className="selectpicker form-select"
              value={selectedCountry}
              onChange={handleCountryChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select Country --</option>
              {countries.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="stateSelect">Select State</label>
            <select
              id="stateSelect"
              className="selectpicker form-select"
              value={selectedState}
              onChange={handleStateChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="citySelect">Select City</label>
            <select
              id="citySelect"
              className="selectpicker form-select"
              value={selectedCity}
              onChange={handleCityChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select City --</option>
              {cities.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="locationTitle">Location Title</label>
          <input
        type="text"
        className="form-control"
        id="locationTitle"
        name="title"
        value={title}
        // onChange={handleChange}
        onChange={(e) => setTitle(e.target.value)} 
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
  value={status ? "active" : "deactive"}
  onChange={(e) => setStatus(e.target.value === "active")}
>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/cmswegrow/my-location'}>Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form> 
    </>
  );
};

export default CreateList;
