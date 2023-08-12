import Image from 'next/image';
import DataEngImg from '../../public/assets/services/landing-services-data-eng.webp';
import DataArchImg from '../../public/assets/services/landing-services-data-arch.webp';
import DataSciImg from '../../public/assets/services/landing-services-data-sci.webp';

const Services = () => {
  return (
    <div id='services' className='w-full p-2 flex items-center py-16'>
      <div className='px-2 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <h2 className='col-span-3 uppercase text-xl tracking-widest text-[#5651e5]'>
          Services
        </h2>
        <div className='w-full overflow-hidden shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
          <h3 className='py-4 text-center'>
          🔧 Data Engineering
          </h3>
          <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4'>
            <Image src={DataEngImg} className='rounded-xl' alt='/' />
          </div>
          <p className='py-2 px-4 text-gray-600'>
          We provide cost-efficient, fast, and scalable data engineering solutions for both cloud and on-premise environments.
          <br /><br />
          Our expertise includes designing and implementing robust data pipelines, optimizing data storage and retrieval, and ensuring data quality and reliability.
          </p>
        </div>
        <div className='w-full overflow-hidden shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
          <h3 className='py-4 text-center'>
          📐 Data Architecture
          </h3>
          <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4'>
            <Image src={DataArchImg} className='rounded-xl' alt='/' />
          </div>
          <p className='py-2 px-4 text-gray-600'>
          Our data architecture services involve designing efficient and scalable data systems that meet your specific business needs.
          <br /> <br />
          We specialize in creating data models, implementing data warehouses and data lakes, and ensuring optimal data integration and management.
          </p>
        </div>
        <div className='w-full overflow-hidden shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
          <h3 className='py-4 text-center'>
          🧪 Data Science
          </h3>
          <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4'>
            <Image src={DataSciImg} className='rounded-xl' alt='/' />
          </div>
          <p className='py-2 px-4 text-gray-600'>
          Our data science services leverage advanced analytics and machine learning techniques to extract valuable insights from your data.
          <br /><br />
          We assist in predictive modeling, statistical analysis, and building AI-driven solutions that drive data-informed decision-making in your organization.
          </p>
        </div>
        {/* TODO: expand and collapse button */}
      </div>
    </div>
  );
};

export default Services;
