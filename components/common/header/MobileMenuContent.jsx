'use client'

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar
} from "react-pro-sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const home = [
  {
    name: "Home 1",
    routerPath: "/",
  },
  {
    name: "Home 2",
    routerPath: "/home-2",
  },
  {
    name: "Home 3",
    routerPath: "/home-3",
  },
  {
    name: "Home 4",
    routerPath: "/home-4",
  },
  {
    name: "Home 5",
    routerPath: "/home-5",
  },
  {
    name: "Home 6",
    routerPath: "/home-6",
  },
  {
    name: "Home 7",
    routerPath: "/home-7",
  },
  {
    name: "Home 8",
    routerPath: "/home-8",
  },
  {
    name: "Home 9",
    routerPath: "/home-9",
  },
  {
    name: "Home 10",
    routerPath: "/home-10",
  },
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
  {
    id: 7,
    title: "Create Listing",
    items: [
      {
        name: "Create Listing",
        routerPath: "/create-listing",
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

const property = [
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

const pages = [
  {
    name: "About Us",
    routerPath: "/about-us",
  },
  {
    name: "Gallery",
    routerPath: "/gallery",
  },
  {
    name: "Faq",
    routerPath: "/faq",
  },
  {
    name: "LogIn",
    routerPath: "/login",
  },
  { name: "Compare", routerPath: "/compare" },
  { name: "Membership", routerPath: "/membership" },

  {
    name: "Register",
    routerPath: "/register",
  },
  {
    name: "Service",
    routerPath: "/service",
  },
  {
    name: "404 Page",
    routerPath: "/404",
  },
  {
    name: "Terms & Conditions",
    routerPath: "/terms",
  },
];

const MobileMenuContent = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
<>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={100}
              height={38}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/header-logo2.png"
              alt="header-logo.png"
            />
            {/* <span className="brand-text">WeGrow</span> */}
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
    {/* <Sidebar> */}
    <div style={{maxHeight:'calc(100vh - 100px)', overflowY:'auto'}}>
        <Menu>
        <MenuItem>
            <div
            onClick={()=>router.push("/")}
             
              className={
                pathname === "/" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Home
            </div>
          </MenuItem>
        <MenuItem>
            <div
            onClick={()=>router.push("/about-us")}
             
              className={
                pathname === "/aboutus" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              About Us
            </div>
          </MenuItem>
          {/* <SubMenu
            label="Home"
           
            className={
              home.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <div
                 
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    val.routerPath?.split('/')[1] === pathname.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End Home Home */}

          {/* <SubMenu
            label="Listing"
            className={
              listing.some((parent) => {
                return parent.items.some(
                  (page) => page.routerPath?.split('/')[1] === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {listing.map((item) => (
              <SubMenu
              label={item.title}
                className={
                  item.items.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                     onClick={()=>router.push(val.routerPath)}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu> */}
          {/* End Pages Listing */}

              <SubMenu
                label="Property"
                className={
                  property.some((page) =>
                    page.routerPath?.split("/")[1] === pathname.split("/")[1]
                  )
                    ? "parent-menu-active"
                    : "inactive-mobile-menu"
                }
              >
                {property.map((val) => (
                  <MenuItem key={val.id}>
                    <div
                      onClick={() => router.push(val.routerPath)}
                      className={
                        pathname.split("/")[1] === val.routerPath?.split("/")[1]
                          ? "ui-active"
                          : "inactive-mobile-menu"
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>

          {/* End Pages Property */}

          {/* <SubMenu
            label="Blog"
            className={
              blog.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname.split('/')[1] 
                  // page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
              )
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] 
                    // val.routerPath + "/[id]" === pathname.split('/')[1]
                      ? "ui-active"
                      : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End pages Blog */}

          {/* <SubMenu
            label="Pages"
            className={
              pages.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End pages Pages */}
          
          <MenuItem>
            <div
            onClick={()=>router.push("/blogs")}
             
              className={
                pathname === "/blogs" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Blog
            </div>
          </MenuItem>
          <MenuItem>
            <div
            onClick={()=>router.push("/faq")}
             
              className={
                pathname === "/faq" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Faq
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/contact")}
             
              className={
                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Contact
            </div>
          </MenuItem>
          <MenuItem className="mobile-phone-call mt-3">
            <div className="d-flex align-items-start justify-content-start gap-0">
              <span className="flaticon-call pe-2"></span>
              <a href="tel:+917421922000" className="text-decoration-none text-dark">
                <span className="flaticon-telephone pe-1"></span> +91 742-192-2000
              </a>
            </div>
          </MenuItem>

          <MenuItem className="mobile-social-icons mt-3">
            <div className="d-flex gap-3 ps-2">
              <a href="https://www.facebook.com/WeGrowInfraventurespvtltd/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/wegrowinfra/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/wegrowinfraventures/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/wegrow-infraventures-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </MenuItem>

          

        

          
        </Menu>
        </div>
      {/* </Sidebar> */}

       </>
     
   
  );
};

export default MobileMenuContent;
