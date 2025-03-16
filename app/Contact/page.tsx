"use client";
import React from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdSend } from "react-icons/md";

const Page = () => {
  return (
    // <div className="w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4">
    //   <div className="w-full max-w-[1200px] h-auto p-4 md:p-8 lg:p-12 bg-[#1a1a1a] rounded-3xl">
    //     {/* Header */}
    //     <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
    //       <h1 className="text-center text-white text-lg md:text-xl font-semibold font-['Sora']">
    //         Online Inquiry Form
    //       </h1>
    //       <p className="text-center text-[#7f7f7f] text-sm md:text-base font-normal font-['Sora']">
    //         Please fill in the following details, and we'll get back to you within 24 hours.
    //       </p>
    //     </div>

    //     {/* Form */}
    //     <div className="w-full flex  items-center justify-center flex-col gap-6">
    //       {/* Row 1: Name, Email, Phone */}
    //       <div className="w-full flex flex-col md:flex-row gap-4">
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your Name"
    //             className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#fff] text-sm font-normal font-['Sora'] placeholder-[#666]"
    //           />
    //         </div>
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="Enter your Email"
    //             className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#fff] text-sm font-normal font-['Sora'] placeholder-[#666]"
    //           />
    //         </div>
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Phone Number
    //           </label>
    //           <input
    //             type="tel"
    //             placeholder="Enter your Phone Number"
    //             className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#fff] text-sm font-normal font-['Sora'] placeholder-[#666]"
    //           />
    //         </div>
    //       </div>

    //       {/* Row 2: Service, Company, Subject */}
    //       <div className="w-full flex flex-col md:flex-row gap-4">
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Select Service
    //           </label>
    //           <div className="relative">
    //             <select
    //               className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#666666] text-sm font-normal font-['Sora'] appearance-none"
    //             >
    //               <option value="">Select your Service</option>
    //               <option value="web-development">Web Development</option>
    //               <option value="application-development">Application Development</option>
    //               <option value="web-application">Web Application</option>
    //               <option value="social-media-management">Social Media Management</option>
    //               <option value="business-consultancy">Business Consultancy</option>
    //               <option value="online-registration">Online Registration (Zomato/Swiggy)</option>
    //               <option value="run-ads ">Run Ads</option>
    //             </select>
    //             <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
    //               <IoMdArrowDropdown size={20} color="white" />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Company / Organization Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter Name"
    //             className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#666666] text-sm font-normal font-['Sora'] placeholder-[#666]"
    //           />
    //         </div>
    //         <div className="w-full md:w-1/3 flex flex-col gap-2">
    //           <label className="text-white text-sm font-normal font-['Sora']">
    //             Subject
    //           </label>
    //           <div className="relative">
    //             <select
    //               className="w-full px-4 py-3 rounded-full border border-[#333333] bg-transparent text-[#666666] text-sm font-normal font-['Sora'] appearance-none"
    //             >
    //               <option value="">Select your Subject</option>
    //               <option value="general">General Inquiry</option>
    //               <option value="support">Support</option>
    //               <option value="sales">Sales</option>
    //             </select>
    //             <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
    //               <IoMdArrowDropdown size={20} color="white" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Message */}
    //       <div className="w-full flex flex-col gap-2">
    //         <label className="text-white text-sm font-normal font-['Sora']">
    //           Message
    //         </label>
    //         <textarea
    //           placeholder="Enter your Message"
    //           className="w-full h-32 px-4 py-3 rounded-lg border border-[#333333] bg-transparent text-[#fff] text-sm font-normal font-['Sora'] resize-none placeholder-[#666]"
    //         />
    //       </div>

    //       {/* Submit Button */}
    //       <button className="w-full md:w-[20%] px-6 py-3 bg-[#1a1a1a] rounded-full border border-neutral-800 flex justify-center items-center gap-2 hover:bg-[#333333] transition-all">
    //         <span className="text-white text-sm font-normal font-['Sora']">
    //           Send your Inquiry
    //         </span>
    //         <MdSend size={22} color="white" />
    //       </button>
    //     </div>
    //   </div>
    // </div>


    <div className="w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4">
      <div className="w-full max-w-[1213px] h-auto p-4 md:p-8 lg:p-12 bg-[#262626] rounded-3xl">
        {/* Form Embed */}
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
          <h1 className="text-center text-white text-lg md:text-xl font-semibold font-['Sora']">
            Online Inquiry Form
          </h1>
          <p className="text-center text-[#7f7f7f] text-sm md:text-base font-normal font-['Sora']">
            Please fill in the following details, and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-6">
          <iframe
            src="https://form.typeform.com/to/jOaEfCbh"
            width="100%"
            height="500"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
