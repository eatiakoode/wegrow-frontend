'use client';

import { Provider } from "react-redux";
import { store } from "../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import { ToastProvider } from "@/components/ToastContext";
import { CompareProvider } from "@/components/common/footer/CompareContext";
import "../public/assets/scss/index.scss";

// Only import Bootstrap JS on the client side
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        /> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
          
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet"></link>
        <link rel="icon"
         href={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/favicon.png`}
         />
      </head>
      <body>
        <Provider store={store}>
          <ToastProvider>
            <CompareProvider>
              {children}
              <ScrollToTop />
            </CompareProvider>
          </ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
