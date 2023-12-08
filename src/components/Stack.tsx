"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AwsLogo from "../../public/assets/skills/aws.png";
import GcpLogo from "../../public/assets/skills/gcp.png";
import AzureLogo from "../../public/assets/skills/azure.png";
import ApachesupersetLogo from "../../public/assets/skills/apachesuperset.png";
import LookerLogo from "../../public/assets/skills/looker.png";
import DomoLogo from "../../public/assets/skills/domo.png";
import PowerbiLogo from "../../public/assets/skills/powerbi.png";
import AirflowLogo from "../../public/assets/skills/airflow.png";
import DatabricksLogo from "../../public/assets/skills/databricks.png";
import AdfLogo from "../../public/assets/skills/adf.png";
import DeltalakeLogo from "../../public/assets/skills/deltalake.png";
import SnowflakeLogo from "../../public/assets/skills/snowflake.png";
import BigqueryLogo from "../../public/assets/skills/bigquery.png";
import DataprocLogo from "../../public/assets/skills/dataproc.png";
import DataplexLogo from "../../public/assets/skills/dataplex.png";
import AzuresynapseLogo from "../../public/assets/skills/azuresynapse.png";
import SnowplowLogo from "../../public/assets/skills/snowplow.png";
import SparkLogo from "../../public/assets/skills/spark.png";
import PytorchLogo from "../../public/assets/skills/pytorch.png";
import TensorflowLogo from "../../public/assets/skills/tensorflow.png";
import AmazonsagemakerLogo from "../../public/assets/skills/amazonsagemaker.png";
import MlflowLogo from "../../public/assets/skills/mlflow.png";
import AzuremlLogo from "../../public/assets/skills/azureml.png";
import VertexaiLogo from "../../public/assets/skills/vertexai.png";

const LoadingLogo = () => (
  <div className="p-4 shadow-xl rounded-xl animate-pulse">
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60px] h-[60px] mb-4 bg-gray-300 rounded-full" />
      <div className="w-[120px] h-4 bg-gray-300 mb-2 rounded-md" />
      <div className="w-[80px] h-4 bg-gray-300 mb-2 rounded-md" />
    </div>
  </div>
);

const LoadingDescription = () => (
  <div className="text-gray-300 text-sm p-2">
    <div className="w-[80%] h-4 bg-gray-300 rounded-md mb-2" />
    <div className="w-[60%] h-4 bg-gray-300 rounded-md mb-2" />
    <div className="w-[70%] h-4 bg-gray-300 rounded-md mb-2" />
  </div>
);

interface Logo {
  name: string;
  description: string;
  image: any;
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
          image: AwsLogo,
        },
        {
          name: "GCP",
          description:
            "Google Cloud Platform (GCP) provides a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
          image: GcpLogo,
        },
        {
          name: "Azure",
          description:
            "Microsoft Azure is a comprehensive cloud computing service for building, testing, deploying, and managing applications and services.",
          image: AzureLogo,
        },
      ],
    },
    {
      name: "ETL & Data Lakehouse",
      description:
      "Efficiently extract, transform, and load data with Airflow, Databricks, Azure Data Factory, BigQuery, Google Dataproc, Snowflake and Azure Synapse. Explore the power of Data Lakehouse technologies like Delta Lake, BigQuery's BigLake and Dataplex for advanced data storage and processing. Enhance your analytics with Snowplow's capabilities for event data collection and processing.",
      logos: [
        {
          name: "Airflow",
          description:
            "Apache Airflow is a platform to programmatically author, schedule, and monitor workflows, enabling complex data processing pipelines.",
          image: AirflowLogo,
        },
        {
          name: "Spark",
          description:
            "Apache Spark is an open-source distributed computing system used for big data processing and analytics.",
          image: SparkLogo,
        },
        {
          name: "Databricks",
          description:
            "Databricks offers a unified analytics platform designed to help teams collaborate on big data and machine learning projects.",
          image: DatabricksLogo,
        },
        {
          name: "BigQuery",
          description:
            "Google BigQuery is a fully-managed, serverless data warehouse that enables super-fast SQL queries using the processing power of Google's infrastructure.",
          image: BigqueryLogo,
        },
        {
          name: "Dataproc",
          description:
            "Google Dataproc is a fast, easy-to-use, fully managed cloud service for running Apache Spark and Apache Hadoop clusters.",
          image: DataprocLogo,
        },
        {
          name: "Dataplex",
          description:
            "Google Dataplex: Unify and govern your data effortlessly. Benefit from advanced data catalog and governance features for seamless data management and data quality.",
          image: DataplexLogo,
        },
        {
          name: "Azure Data Factory",
          description:
            "Azure Data Factory is a cloud-based data integration service that enables you to create, schedule, and manage data pipelines.",
          image: AdfLogo,
        },
        {
          name: "Delta Lake",
          description:
            "Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads.",
          image: DeltalakeLogo,
        },
        {
          name: "Snowflake",
          description:
            "Snowflake is a cloud-based data warehousing platform designed for the cloud.",
          image: SnowflakeLogo,
        },
        {
          name: "Azure Synapse",
          description:
            "Azure Synapse Analytics is an analytics service that brings together big data and data warehousing.",
          image: AzuresynapseLogo,
        },
        {
          name: "Snowplow",
          description:
            "Snowplow is an event data collection and processing platform, empowering organizations to collect and process data from various sources.",
          image: SnowplowLogo,
        },
      ],
    },
    {
      name: "Machine Learning",
      description:
        "We harness the capabilities of cutting-edge machine learning tools including PyTorch, TensorFlow, Amazon SageMaker, MLflow, Azure Machine Learning, and Vertex AI to build intelligent and data-driven solutions.",
      logos: [
        {
          name: "PyTorch",
          description:
            "PyTorch is an open-source machine learning framework that accelerates the path from research prototyping to production deployment.",
          image: PytorchLogo,
        },
        {
          name: "TensorFlow",
          description:
            "TensorFlow is an open-source machine learning framework for dataflow and differentiable programming.",
          image: TensorflowLogo,
        },
        {
          name: "Amazon SageMaker",
          description:
            "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly.",
          image: AmazonsagemakerLogo,
        },
        {
          name: "MLflow",
          description:
            "MLflow is an open-source platform to manage the end-to-end machine learning lifecycle.",
          image: MlflowLogo,
        },
        {
          name: "Azure ML",
          description:
            "Azure Machine Learning is a cloud-based platform for developing, training, and deploying machine learning models.",
          image: AzuremlLogo,
        },
        {
          name: "Vertex AI",
          description:
            "Google Cloud Vertex AI accelerates the deployment and maintenance of machine learning models at scale.",
          image: VertexaiLogo,
        },
      ],
    },
    {
      name: "Data Visualization",
      description:
        "We utilize powerful data visualization tools such as Apache Superset, Looker, Domo, and PowerBI to transform complex data into actionable insights for our clients.",
      logos: [
        {
          name: "Superset",
          description:
            "Apache Superset is a modern, open-source data exploration and visualization platform.",
          image: ApachesupersetLogo,
        },
        {
          name: "Looker",
          description:
            "Looker is a business intelligence and data visualization tool that helps companies make better business decisions.",
          image: LookerLogo,
        },
        {
          name: "Domo",
          description:
            "Domo is a cloud-based business intelligence and data visualization platform that empowers organizations to make informed decisions.",
          image: DomoLogo,
        },
        {
          name: "PowerBI",
          description:
            "Microsoft Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities.",
          image: PowerbiLogo,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].name
  );
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (categoryName: string) => {
    setLoading(true);

    setTimeout(() => {
      setActiveCategory(categoryName);
      setLoading(false);
    }, 500);
  };
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
                onClick={() => handleCategoryClick(category.name)}
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
          {loading ? (
              <LoadingDescription />
            ) : (
              categories.map(
                (category) =>
                  activeCategory === category.name && (
                    <p key={category.name}>{category.description}</p>
                  )
              )
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? Array(4)
                  .fill(null)
                  .map((_, index) => <LoadingLogo key={index} />)
              : categories
                  .find((category) => category.name === activeCategory)
                  ?.logos.map((logo, index) => (
                    <div key={index} className="p-4 shadow-xl rounded-xl">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-[60px] h-[60px] mb-4 relative flex items-center justify-center">
                          <Image
                            style={{ objectFit: "contain" }}
                            src={logo.image}
                            alt={logo.name}
                          />
                        </div>
                        <h3 className="text-lg font-semibold">{logo.name}</h3>
                        <p className="text-gray-600 text-sm py-2">{logo.description}</p>
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
