import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Features = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center md:grid grid-cols-3 gap-6 md:gap-10 py-6">
        <div className="flex flex-row md:flex-col items-center sm:items-start gap-4">
          <div className="">
            <img src={img1} alt="..." className="" />
          </div>
          <div className="flex flex-col py-4 gap-2 tracking-wide">
            <div className="text-base font-bold">Brand Assets</div>
            <div className="text-xs md:text-sm">
              All of the official design assets and guidelines used by Wix can
              be found here, along with all the information you need about our
              graphic elements and the philosophy behind them.
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center sm:items-start gap-4">
          <div className="">
            <img src={img2} alt="..." className="" />
          </div>
          <div className="flex flex-col py-4 gap-2 tracking-wide">
            <div className="text-base font-bold">About Us</div>
            <div className="text-xs md:text-sm">
              Wix makes it easy for everyone to get online with a stunning, professional and powerful web presence. Learn more about our company, customers, products and people.
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center sm:items-start gap-4">
          <div className="">
            <img src={img3} alt="..." className="" />
          </div>
          <div className="flex flex-col py-4 gap-2 tracking-wide">
            <div className="text-base font-bold">Investor Relations</div>
            <div className="text-xs md:text-sm">
              Information about Wix for investors and financial analysts. You can also find a company glossary, stats, and a list of IR events and presentations.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 md:py-16">
        <h2 className="text-3xl font-bold py-10">Social</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 w-full xl:w-3/4">
          <div className="flex-1 px-4 md:px-10 py-4 md:py-10 flex items-center justify-center border-l border-y border-black text-sm md:text-xl gap-1">
          <i className="fa-brands fa-wix text-xl md:text-3xl"></i>{" "}Blog
          </div>
          <div className="flex-1 px-4 md:px-10 py-4 md:py-10 text-xl md:text-3xl text-center border-x border-y border-black">
            <i className="fa-brands fa-square-facebook"></i>
          </div>
          <div className="flex-1 px-4 md:px-10 py-4 md:py-10 text-xl md:text-3xl text-center border-r border-y sm:border-r-0 border-black">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="flex-1 px-4 md:px-10 py-4 md:py-10 text-xl md:text-3xl text-center border-l border-b sm:border-y border-black">
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="flex-1 px-4 md:px-10 py-4 md:py-10 text-xl md:text-3xl text-center border-x border-b sm:border-y border-black">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
