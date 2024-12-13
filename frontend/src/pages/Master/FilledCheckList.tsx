import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import Nodata from '../../images/FallBack.png';

import { useState } from 'react';
import { GetFilledChecklist } from '../../services/MasterApis';
import { CiBookmarkCheck } from 'react-icons/ci';
import FilledTable from '../../components/FilledTable';
import { IoArrowBackSharp } from 'react-icons/io5';
import { HiOutlineHandRaised } from 'react-icons/hi2';
import QueryModal from './QueryModal';

const FilledCheckList = () => {
  const { loc_id } = useParams();
  let currentDate = new Date().toISOString().slice(0, 10);
  let [year, month, day] = currentDate.split('-');
  let formattedDate = `${day}-${month}-${year}`;  

  const [date, setDate] = useState(formattedDate);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  if (data === undefined || null) {
    return (
      <div className="flex-row justify-center items-center font-bold text-2xl">
        <Link
          to={'/'}
          className="inline-flex items-center h-3 justify-center gap-2.5 rounded-full bg-bodydark text-black-2 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <IoArrowBackSharp size={20} />
          </span>
          Go Back
        </Link>
        {/* <button className="inline-flex">Go Back</button> */}
        <div className="flex justify-center animate-pulse mt-3">
          <img
            src={Nodata}
            className=" h-[400px] w-[400px] flex justify-center rounded-2xl"
          />
        </div>
      </div>
    );
  }
  const handleSubmit = async () => {
    let body = {
      loc_id: loc_id,
      date: date,
    };
    setloading(true);
    const response = await GetFilledChecklist(body);
    setData(response);
    setloading(false);
  };
  console.log(data);

  const TableHeaders = [
    {
      name: 'Image',
    },
    {
      name: 'Q.NO.',
    },
    {
      name: 'Question',
    },
    {
      name: 'Status',
    },
    {
      name: 'Description',
    },
    {
      name: 'Actions',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Filled Checklist" />
      <div className="flex gap-4 mb-4">
        {/* Date input container */}
        <div className="mb-3 flex-1 min-w-[220px] sm:min-w-[250px] md:min-w-[300px]">
          <label className="mb-3 block text-black dark:text-white font-bold">
            Select Date <span className="text-danger">*</span>
          </label>
          <input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="w-full xl:w-[250px] rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:bg-form-input"
          />
        </div>

        {/* Button container */}
        <div className="flex mt-8 w-full sm:w-auto">
          <button
            disabled={date.length === 0}
            onClick={handleSubmit}
            className="h-13 mt-[2px] inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-3 px-6 text-center font-medium text-white hover:bg-opacity-90"
          >
            {loading ? (
              <div className="">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-danger animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {' '}
                <span>
                  <CiBookmarkCheck size={25} />
                </span>
                View Checklist{' '}
              </>
            )}
          </button>
        </div>
      </div>
      {data?.length === 0 ? (
        <h1 className="flex justify-center font-bold text-xl">
          No Data Found .
        </h1>
      ) : (
        <FilledTable
          TableHeaders={TableHeaders}
          checkdata={data}
          loading={loading}
        />
      )}
      {data.length > 0 && (
        <button onClick={()=>setShowModal(true)} className="h-10 mt-[2px] float-right inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-3 px-6 text-center font-medium text-white hover:bg-opacity-90">
          <HiOutlineHandRaised size={20} />
          Raise Query
        </button>
      )}

      <QueryModal setShowModal = {setShowModal} showModal = {showModal}/>
    </>
  );
};

export default FilledCheckList;
