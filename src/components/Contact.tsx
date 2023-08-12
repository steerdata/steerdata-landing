"use client";
import { useEffect } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import HubspotContactForm from "./HubspotContactForm";

declare global {
  interface Window {
    hbspt: any;
  }
}

const Contact = () => {
  useEffect(() => {
    const calendlyScript = document.createElement("script");
    calendlyScript.type = "text/javascript";
    calendlyScript.src =
      "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    return () => {
      document.body.removeChild(calendlyScript);
    };
  }, []);

  return (
    <div id="contact" className="w-full p-2 py-8 lg:py-16">
      <div className="px-2 max-w-[1240px] mx-auto">
        <h2 className="col-span-3 uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div
              className="p-4"
              style={{ minWidth: "320px", minHeight: "700px" }}
            >
              <HubspotContactForm
                region="eu1"
                portalId="139804690"
                formId="fabc9a22-3788-4aba-a965-280f67adb981"
              />
            </div>
          </div>
          {/* right */}
          <div
            className="calendly-inline-widget col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
            data-url="https://calendly.com/steerdata/free-consultation?hide_gdpr_banner=1&primary_color=5651e5"
            style={{ minWidth: "320px", minHeight: "700px" }}
          ></div>
        </div>
        <div className="flex justify-center py-20">
          <a href="#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </a>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <footer className="flex justify-center py-10">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} SteerData LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
