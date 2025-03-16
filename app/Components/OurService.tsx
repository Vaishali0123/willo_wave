// "use client";
// import React from "react";
// import { LuArrowUpRight } from "react-icons/lu";
// // import { motion } from "framer-motion";
// // import WebDevelopment from "../Assets/WebDevelopment.png";
// // import WebRedesign from "../Assets/WebRedesign.png";
// // import AppDevelopment from "../Assets/AppDevelopment.png";
// // import VideoEditing from "../Assets/VideoEditing.png";
// // import WebsiteHosting from "../Assets/WebsiteHosting.png";
// // import ContentCreation from "../Assets/ContentCreation.png";
// // import Image from "next/image";


"use client";
import React from "react";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

const OurService = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each child
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full gap-5 space-y-8 px-4 md:px-12 select-none">
      {/* Header Section */}
      <motion.div
        className="w-full flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="h-[30px] p-2.5 bg-gradient-to-b from-[#181818] via-[#333333] to-[#181818] rounded-[18px] flex justify-center items-center"
          variants={headerVariants}
        >
          <div className="text-white text-sm font-normal">Our Services</div>
        </motion.div>
      </motion.div>

      {/* Title and Button Section */}
      <motion.div
        className="flex flex-col pp:flex-row justify-between items-center space-y-4 md:space-y-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-start text-left space-y-2 md:space-y-4 "
          variants={headerVariants}
        >
          <div className="text-[#0f0f0f] text-2xl md:text-4xl font-semibold font-sans tracking-wider">
            Apps, websites & branding
          </div>
          <div className="text-[#0f0f0f] text-base md:text-xl font-normal font-['Manrope'] leading-relaxed">
            Get everything you need in one place
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:text-center text-center space-y-2 items-center justify-center md:space-y-4"
          variants={headerVariants}
        >
          <div className="text-lg">We have 10+ other services</div>
          <motion.div
            className="p-2 w-[180px] bg-[#9cff4f] rounded-[20px] flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="text-base flex items-center justify-center gap-2">
              Discover more <LuArrowUpRight />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "Web Development",
            bg: "bg-[#f5fdeb]",
            description:
              "Build responsive, high-performance websites tailored to your business needs.",
          },
          {
            title: "Web Redesign",
            bg: "bg-[#ebecfd]",
            description:
              "Revamp your website for a modern look and improved user experience.",
          },
          {
            title: "App Development",
            bg: "bg-[#ebfafd]",
            description:
              "Create powerful mobile applications with seamless performance.",
          },
          {
            title: "Video Editing",
            bg: "bg-[#fdebf6]",
            description:
              "Create compelling video content that captures attention and drives results.",
          },
          {
            title: "Website Hosting",
            bg: "bg-[#fdebeb]",
            description:
              "Reliable and secure hosting solutions to keep your website online and performing optimally.",
          },
          {
            title: "Content Creation",
            bg: "bg-[#fdf4eb]",
            description:
              "Compelling content that gets your brand noticed. We create engaging content for all your digital platforms.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className={`w-full pp:min-h-[250px] relative ${service.bg} rounded-[20px] overflow-hidden flex flex-col justify-center p-6`}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }} // Add hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col gap-4">
              <div className="text-[#000] text-[13px] pp:text-[22px] font-bold ss:font-medium text-center ss:text-left">
                {service.title}
              </div>
              <div className="text-[#333] text-[18px] font-medium font-['Manrope'] leading-relaxed hidden pp:block">
                {service.description}
              </div>
            </div>
            <div className="px-[15px] py-[15px] left-0 top-0 absolute bg-[#030d03] rounded-br-xl flex-col justify-center items-center hidden pp:block">
              <div className="text-[#f7f7f7] text-xl font-medium font-['Manrope']">
                0{index + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurService;