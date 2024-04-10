import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-4 py-12 md:py-16">
      <div className="text-3xl font-bold w-full md:w-1/3">Contact</div>
      <div className="flex flex-col flex-1 px-4">
        <div className="text-sm tracking-wider mb-10 md:mb-20">
          If you're a member of the media and would like to get in touch, please
          send us a note. For non-press-related inquiries, please use our{" "}
          <a href="/" className="text-sky-500 hover:text-sky-600 duration-200">
            general contact page
          </a>
          .
        </div>
        <div className="">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-6 mb-8 md:mb-12">
            <input
              type="text"
              className="h-8 text-sm border-0 border-b border-black tracking-wide text-black placeholder:text-gray-800 focus:ring-0 focus:border-sky-500 flex-1"
              placeholder="First Name"
            />
            <input
              type="text"
              className="h-8 text-sm border-0 border-b border-black tracking-wide text-black placeholder:text-gray-800 focus:ring-0 focus:border-sky-500 flex-1"
              placeholder="Phone"
            />
          </div>
          <div className=" mb-8 md:mb-12">
            <input
              type="text"
              className="h-8 text-sm border-0 border-b border-black tracking-wide text-black placeholder:text-gray-800 focus:ring-0 focus:border-sky-500 w-full"
              placeholder="Email"
            />

          </div>
          <div className=" mb-8 md:mb-12">
            <textarea rows="" cols="" className="h-40 text-sm border border-black tracking-wider text-black placeholder:text-zinc-400 focus:ring-0 focus:border-sky-500 w-full resize-none"
              placeholder="Type your message here..."></textarea>
          </div>
          <div className="">
            <button className="px-12 py-2 border border-slate-900 hover:text-white hover:bg-black rounded-full text-sm tracking-wider duration-200">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
