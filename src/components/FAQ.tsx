"use client";
import React, { useState } from "react";
import * as icons from "react-icons/hi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Q: What services does SteerData offer?",
      answer:
        "A: SteerData offers a range of services focused on solving data problems. We specialize in data engineering, data architecture, and data science. Whether you need assistance with on-premise solutions or cloud platforms like AWS, GCP, or Azure, our team of experts is here to help.",
    },
    {
      question: "Q: What industries does SteerData work with?",
      answer:
        "A: SteerData works with clients across various industries, including but not limited to finance, healthcare, e-commerce, and technology. Our expertise in data engineering and data science allows us to cater to the unique data needs of different industries.",
    },
    {
      question: "Q: How can SteerData help my business?",
      answer:
        "A: At SteerData, we can help your business by leveraging the power of data. Whether you need to optimize your data infrastructure, develop advanced analytics solutions, or implement machine learning models, our team can provide the expertise and guidance you need to make data-driven decisions and gain a competitive edge.",
    },
    {
      question: "Q: How experienced is the team at SteerData?",
      answer:
        "A: The team at SteerData consists of highly skilled professionals with backgrounds in computer science, mathematics, data engineering, and data science. With over four years of industry experience working as data scientists and data engineers, we bring a wealth of knowledge and expertise to every project we undertake.",
    },
    {
      question: "Q: Can SteerData handle both small-scale and large-scale data projects?",
      answer:
        "A: Yes, SteerData is equipped to handle projects of varying sizes and complexities. Whether you have a small-scale data analysis task or a large-scale data infrastructure project, we have the capabilities to deliver high-quality solutions that meet your specific requirements.",
    },
    {
      question: "Q: How can I get started with SteerData?",
      answer:
        "A: Getting started with SteerData is easy! Simply reach out to us through our contact form or give us a call. Our team will be happy to discuss your data challenges, understand your goals, and provide tailored solutions that align with your business needs.",
    },
    {
      question: "Q: What sets SteerData apart from other data consulting firms?",
      answer:
        "A: At SteerData, we differentiate ourselves through our deep expertise in data engineering, data architecture, and data science. We combine technical excellence with a client-centric approach, ensuring that we understand your unique business challenges and deliver customized solutions that drive tangible results. Our commitment to quality, innovation, and customer satisfaction sets us apart in the data consulting industry.",
    },
  ];

  return (
    <div id="faq" className="w-full p-2 py-8">
      <div className="px-2 max-w-[1240px] mx-auto">
        <h2 className="col-span-3 uppercase text-xl tracking-widest text-[#5651e5]">
          FAQ
        </h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-bold">{item.question}</h4>
                <span className="toggle-icon px-4">
                  {activeIndex === index ? <icons.HiMinus /> : <icons.HiPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <>
                  <hr className="my-4" />
                  <p>{item.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
