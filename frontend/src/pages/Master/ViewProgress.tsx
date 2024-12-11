import { useEffect, useState } from 'react';
import { GetLocations } from '../../services/Auth.Apis';
import LocationCard from '../../components/LocationCard';
import { SlLocationPin } from "react-icons/sl";
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import NoData from "../../images/FallBack.png";
const ViewProgress = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetLocations();
      setData(response);
    };
    fetchData();
  }, []);
  if (data === undefined || null) {
    return (
      <div className="flex-row justify-center items-center font-bold text-2xl">
           <Link
            to={"/"}
              className="inline-flex items-center h-3 justify-center gap-2.5 rounded-full bg-bodydark  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
              <IoArrowBackSharp size={20} />
              </span>
              Go Back
            </Link>
       
        <div className='flex justify-center animate-pulse mt-3'>
        <img src={NoData} className=" h-[400px] w-[400px] flex justify-center rounded-2xl"/>
        </div>
      </div>

    );
    
  }
  return (
    <>
     <Breadcrumb pageName="Locations" />
      <h1 className= " inline-flex text-xl font-bold mb-4">All Locations  <span className='font-bold text-black mt-1 ml-1'><SlLocationPin /></span></h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       
        {data.map((item: any) => (
          <LocationCard key={item.id} title={item.name} id={item.id} />
        ))}
      </div>
    </>
  );
  
};

export default ViewProgress;
