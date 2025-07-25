'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { getCategoryTableData } from "@/api/frontend/category";
// import { useState } from "react";
// import { useEffect } from "react";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();
  // const [categories, setCategories] = useState([]);
  
  // const fetchCategories = async () => {
  //   try {
  //     const response = await getCategoryTableData();
  //     setCategories(response || []);
  //   } catch (err) {
  //     console.error("Error fetching Category:", err);
  //   }
  // };

  // ();
// useEffect(() => {
//         fetchCategories();
      
//     }, []);
  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
    { id: 2, name: "Home 2", routerPath: "/home-2" },
    {
      id: 3,
      name: "Home 3",
      routerPath: "/home-3",
    },
    { id: 4, name: "Home 4", routerPath: "/home-4" },
    { id: 5, name: "Home 5", routerPath: "/home-5" },
    { id: 6, name: "Home 6", routerPath: "/home-6" },
    { id: 7, name: "Home 7", routerPath: "/home-7" },
    { id: 8, name: "Home 8", routerPath: "/home-8" },
    { id: 9, name: "Home 9", routerPath: "/home-9" },
    { id: 10, name: "Home 10", routerPath: "/home-10" },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
        {
          name: "Grid v2",
          routerPath: "/listing-grid-v2",
        },
        {
          name: "Grid v3",
          routerPath: "/listing-grid-v3",
        },
        {
          name: "Grid v4",
          routerPath: "/listing-grid-v4",
        },
        {
          name: "Grid v5",
          routerPath: "/listing-grid-v5",
        },
        {
          name: "Grid v6",
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: "Listing List",
      items: [
        {
          name: "List V1",
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: "Listing Style",
      items: [
        {
          name: "Parallax Style",
          routerPath: "/parallax-style",
        },
        {
          name: "Slider Style",
          routerPath: "/slider-style",
        },
        {
          name: "Map Header",
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: "Listing Half",
      items: [
        {
          name: "Map V1",
          routerPath: "/listing-map-v1",
        },
        {
          name: "Map V2",
          routerPath: "/listing-map-v2",
        },
        {
          name: "Map V3",
          routerPath: "/listing-map-v3",
        },
        {
          name: "Map V4",
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: "Agent View",
      items: [
        {
          name: "Agent V1",
          routerPath: "/agent-v1",
        },
        {
          name: "Agent V2",
          routerPath: "/agent-v2",
        },
        {
          name: "Agent Details",
          routerPath: "/agent-details",
        },
      ],
    },
    {
      id: 6,
      title: "Agencies View",
      items: [
        {
          name: "Agencies V1",
          routerPath: "/agency-v1",
        },
        {
          name: "Agencies V2",
          routerPath: "/agency-v2",
        },
        {
          name: "Agencies Details",
          routerPath: "/agency-details",
        },
      ],
    },
  ];

  // const property = [
  //   {
  //     id: 1,
  //     title: "User Admin",
  //     items: [
  //       {
  //         name: "Dashboard",
  //         routerPath: "/my-dashboard",
  //       },
  //       {
  //         name: "My Properties",
  //         routerPath: "/my-properties",
  //       },
  //       {
  //         name: "My Message",
  //         routerPath: "/my-message",
  //       },
  //       {
  //         name: "My Review",
  //         routerPath: "/my-review",
  //       },
  //       {
  //         name: "My Favourites",
  //         routerPath: "/my-favourites",
  //       },
  //       {
  //         name: "My Profile",
  //         routerPath: "/my-profile",
  //       },
  //       {
  //         name: "My Package",
  //         routerPath: "/my-package",
  //       },
  //       {
  //         name: "My Saved Search",
  //         routerPath: "/my-saved-search",
  //       },
  //       {
  //         name: "Add Property",
  //         routerPath: "/create-listing",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Listing Single",
  //     items: [
  //       {
  //         name: "Single V1",
  //         routerPath: "/listing-details-v1",
  //       },
  //       {
  //         name: "Single V2",
  //         routerPath: "/listing-details-v2",
  //       },
  //       {
  //         name: "Single V3",
  //         routerPath: "/listing-details-v3",
  //       },
  //       {
  //         name: "Single V4",
  //         routerPath: "/listing-details-v4",
  //       },
  //     ],
  //   },
  // ];

  // const property = [
  //   { id: 1, name: "Residential", routerPath: "/property-list?cat=residential" },
  //   { id: 2, name: "Commercial", routerPath: "/property-list?cat=commercial" },
  // ];
  const cat = [
      { id: 1, name: "Residential", routerPath: "/property-list?cat=67e67294759f85d6bf7a131a" },
       { id: 2, name: "Commercial", routerPath: "/property-list?cat=67ea48d17cfa562fe8eaafd0" },
       { id: 3, name: "SCO Plots", routerPath: "/property-list?cat=686e180e92dba9f24fab5f92" },
       { id: 4, name: "Industrial Plots", routerPath: "/property-list?cat=686e18b092dba9f24fab6011" },
    ];

  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {
      id: 4,
      name: "Blog Details",
      routerPath: "/blog-details",
    },
  ];

  // const pages = [
  //   { id: 1, name: "About Us", routerPath: "/about-us" },
  //   { id: 2, name: "Gallery", routerPath: "/gallery" },
  //   { id: 3, name: "Faq", routerPath: "/faq" },
  //   { id: 4, name: "LogIn", routerPath: "/login" },
  //   { id: 5, name: "Compare", routerPath: "/compare" },
  //   { id: 6, name: "Membership", routerPath: "/membership" },

  //   { id: 7, name: "Register", routerPath: "/register" },
  //   { id: 8, name: "Service", routerPath: "/service" },
  //   { id: 9, name: "404 Page", routerPath: "/404" },
  //   { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  // ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
          {/* <span className="arrow"></span> */}
        </a>
        {/* <!-- Level Two--> */}

        {/* <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <Link
          href="/about-us"
          className={
            pathname?.split("/")[1] === "about-us" ? "ui-active" : undefined
          }
        >
        <span className="title">About Us</span>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            cat.some((item) => item.routerPath?.split("/")[1] === pathname?.split("/")[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Property</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
        {/* {categories.map((item) => (
            <li key={item._id}>
              <Link
                  href={`/property-list?cat=${item._id}`}
                  className={
                    pathname?.split("/")[1] === item.routerPath?.split("/")[1]
                      ? "ui-active"
                      : undefined
                  }
                >
                {item.title}
              </Link>
            </li>
          ))} */}
          {cat.map((item) => (
            <li key={item.id}>
              <Link
                  href={item.routerPath}
                  className={
                    pathname?.split("/")[1] === item.routerPath?.split("/")[1]
                      ? "ui-active"
                      : undefined
                  }
                >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* End .dropitem */}

      {/* <li className="dropitem">
        <Link
          href="/gallery"
          className={
            pathname?.split("/")[1] === "gallery" ? "ui-active" : undefined
          }
        >
        <span className="title">Gallery</span>
        </Link>
      </li> */}



      {/* End .dropitem */}

      <li className="dropitem">
        <Link
          href="/blogs"
          className={
            pathname?.split("/")[1] === "blogs" ? "ui-active" : undefined
          }
        >
          <span className="title">Blog</span>
        </Link>
      </li>

      {/* End .dropitem */}

      <li className="dropitem">
        <Link
          href="/faq"
          className={
            pathname?.split("/")[1] === "faq" ? "ui-active" : undefined
          }
        >
          <span className="title">Faq</span>
        </Link>
      </li>

      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/news-and-insights"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          News & Insights
        </Link>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li> */}
      {/* End .dropitem */}

      <li className={`list-inline-item border_listing ${float}`}>
        <a href="tel:+917421922000">
          <span className="flaticon-telephone"></span>
        </a>
      </li>
      <li className={`list-inline-item add_listing ${float}`}>
        <a href="/sell-your-property">
          <span className="fa fa-tags pe-xl-1"></span>
          <span className="dn-lg"> Sell your Property</span>
        </a>
      </li>
      <li className={`list-inline-item add_listing ${float}`}>
        <a href="/contact">
          <span className="flaticon-calendar pe-xl-1"></span>
          <span className="dn-lg"> Setup a Meeting</span>
        </a>
      </li>

      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
