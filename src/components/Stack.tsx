"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Logo {
  name: string;
  description: string;
  default: any;
}

interface Category {
  name: string;
  description: string;
  logos: Logo[];
}

const Stack = () => {
  const categories: Category[] = [
    {
      name: "Cloud Providers",
      description:
        "Our expertise in cloud providers includes AWS, GCP, and Azure. We strategically chose these platforms for their comprehensive range of services and seamless integration capabilities, enabling us to deliver efficient and scalable solutions for our clients.",
      logos: [
        {
          name: "AWS",
          description:
            "Amazon Web Services (AWS) is a secure cloud services platform, offering computing power, database storage, and other functionalities.",
          default: require("../../public/assets/skills/aws.png"),
        },
        {
          name: "GCP",
          description:
            "Google Cloud Platform (GCP) provides a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
          default: require("../../public/assets/skills/gcp.png"),
        },
        {
          name: "Azure",
          description:
            "Microsoft Azure is a comprehensive cloud computing service for building, testing, deploying, and managing applications and services.",
          default: require("../../public/assets/skills/azure.png"),
        },
      ],
    },
    {
      name: "Data Visualization",
      description:
        "We utilize powerful data visualization tools such as Apachesuperset, Looker, Domo, and PowerBI to transform complex data into actionable insights for our clients.",
      logos: [
        {
          name: "Superset",
          description:
            "Apache Superset is a modern, open-source data exploration and visualization platform.",
          default: require("../../public/assets/skills/apachesuperset.png"),
        },
        {
          name: "Looker",
          description:
            "Looker is a business intelligence and data visualization tool that helps companies make better business decisions.",
          default: require("../../public/assets/skills/looker.png"),
        },
        {
          name: "Domo",
          description:
            "Domo is a cloud-based business intelligence and data visualization platform that empowers organizations to make informed decisions.",
          default: require("../../public/assets/skills/domo.png"),
        },
        {
          name: "PowerBI",
          description:
            "Microsoft Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities.",
          default: require("../../public/assets/skills/powerbi.png"),
        },
      ],
    },
    {
      name: "ETL",
      description:
        "Our ETL solutions are powered by leading tools like Airflow, Databricks, and Azure Data Factory, enabling us to design, automate, and optimize data workflows for efficient data processing and analysis.",
      logos: [
        {
          name: "Airflow",
          description:
            "Apache Airflow is a platform to programmatically author, schedule, and monitor workflows, enabling complex data processing pipelines.",
          default: require("../../public/assets/skills/airflow.png"),
        },
        {
          name: "Databricks",
          description:
            "Databricks offers a unified analytics platform designed to help teams collaborate on big data and machine learning projects.",
          default: require("../../public/assets/skills/databricks.png"),
        },
        {
          name: "Azure Data Factory",
          description:
            "Azure Data Factory is a cloud-based data integration service that enables you to create, schedule, and manage data pipelines.",
          default: require("../../public/assets/skills/adf.png"),
        },
      ],
    },
    {
      name: "Data Lakehouse",
      description:
        "We leverage advanced data lakehouse technologies including Delta Lake, Snowflake, and Azure Synapse to create unified and efficient data storage and processing solutions for our clients.",
      logos: [
        {
          name: "Delta Lake",
          description:
            "Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads.",
          default: require("../../public/assets/skills/deltalake.png"),
        },
        {
          name: "Snowflake",
          description:
            "Snowflake is a cloud-based data warehousing platform designed for the cloud.",
          default: require("../../public/assets/skills/snowflake.png"),
        },
        {
          name: "Azure Synapse",
          description:
            "Azure Synapse Analytics is an analytics service that brings together big data and data warehousing.",
          default: require("../../public/assets/skills/azuresynapse.png"),
        },
      ],
    },
    {
      name: "Databases",
      description:
        "Our database solutions encompass a range of powerful technologies including MongoDB and Snowplow, enabling us to handle and process large amounts of data effectively.",
      logos: [
        {
          name: "MongoDB",
          description:
            "MongoDB is a NoSQL database program used to handle large amounts of data.",
          default: require("../../public/assets/skills/mongo.png"),
        },
        {
          name: "Snowplow",
          description:
            "Snowplow is an event data collection and processing platform, empowering organizations to collect and process data from various sources.",
          default: require("../../public/assets/skills/snowplow.png"),
        },
      ],
    },
    {
      name: "Machine Learning",
      description:
        "We harness the capabilities of cutting-edge machine learning tools including Spark, PyTorch, TensorFlow, Amazon SageMaker, MLflow, Azure Machine Learning, and Vertex AI to build intelligent and data-driven solutions.",
      logos: [
        {
          name: "Spark",
          description:
            "Apache Spark is an open-source distributed computing system used for big data processing and analytics.",
          default: require("../../public/assets/skills/spark.png"),
        },
        {
          name: "PyTorch",
          description:
            "PyTorch is an open-source machine learning framework that accelerates the path from research prototyping to production deployment.",
          default: require("../../public/assets/skills/pytorch.png"),
        },
        {
          name: "TensorFlow",
          description:
            "TensorFlow is an open-source machine learning framework for dataflow and differentiable programming.",
          default: require("../../public/assets/skills/tensorflow.png"),
        },
        {
          name: "Amazon SageMaker",
          description:
            "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly.",
          default: require("../../public/assets/skills/amazonsagemaker.png"),
        },
        {
          name: "MLflow",
          description:
            "MLflow is an open-source platform to manage the end-to-end machine learning lifecycle.",
          default: require("../../public/assets/skills/mlflow.png"),
        },
        {
          name: "Azure ML",
          description:
            "Azure Machine Learning is a cloud-based platform for developing, training, and deploying machine learning models.",
          default: require("../../public/assets/skills/azureml.png"),
        },
        {
          name: "Vertex AI",
          description:
            "Google Cloud Vertex AI accelerates the deployment and maintenance of machine learning models at scale.",
          default: require("../../public/assets/skills/vertexai.png"),
        },
      ],
    },
  ];

  // State to keep track of active category
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].name
  );
  return (
    <div id="stack" className="w-full p-2 py-8 lg:py-16">
      <div className="px-2 max-w-[1240px] mx-auto">
        <h2 className="col-span-3 uppercase text-xl tracking-widest text-[#5651e5]">
          Tech Stack
        </h2>
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-2 border-b border-gray-300 pb-2">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-t-md cursor-pointer ${
                  activeCategory === category.name
                    ? "bg-gray-200 text-gray-700"
                    : "text-gray-700"
                }`}
              >
                {category.name}
              </div>
            ))}
          </div>

          <div className="mt-4 text-gray-600">
            {categories.map(
              (category) =>
                activeCategory === category.name && (
                  <p key={category.name}>{category.description}</p>
                )
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories
              .find((category) => category.name === activeCategory)
              ?.logos.map((logo, index) => (
                <div key={index} className="p-4 shadow-xl rounded-xl">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[80px] h-[80px] mb-4 relative flex items-center justify-center">
                      <Image
                        fill
                        style={{ objectFit: "contain" }}
                        src={logo.default}
                        alt={logo.name}
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{logo.name}</h3>
                    <p className="text-gray-600 text-sm py-2">
                      {logo.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;