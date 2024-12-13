import { FC, useState } from 'react';
import Modal from './Modal';
import { FaRocketchat } from 'react-icons/fa';

interface TableHeader {
  name: string;
}

interface Data {
  user_name: any;
  date: string;
  u_id: number;
  q_id: number;
  q_flag: string;
  description: string;
  question: string;
  location_name: string;
  image: any;
}
interface FilledDataProp {
  checkdata: Data[];
  TableHeaders: TableHeader[];
  loading: boolean;
}

const FilledTable: FC<FilledDataProp> = ({
  TableHeaders,
  checkdata,
  loading,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleImageClick = (imageSrc: string) => {
    if (imageSrc === null) {
      setShowModal(false);
      return;
    }

    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  return (
    <>
      <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        {/* <h1>{checkdata?.map((item:Data)=><p key={item.q_id}>{item.user_name}</p>)}</h1> */}
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4  sticky top-0 z-10">
                {TableHeaders?.map((item) => (
                  <th
                    className='"min-w-[220px] py-4 px-4 font-medium sticky top-0 z-10 text-black dark:text-white xl:pl-11'
                    key={item.name}
                  >
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            {loading ? (
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
              >
                <div className="flex items-center justify-center  h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-graydark dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="">
                  <div className="h-2.5 bg-gray rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray  rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray  rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray  rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray  rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray  rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <tbody>
                {checkdata?.map((item: Data) => (
                  <tr className="" key={item.q_id}>
                    <td className="cursor-pointer border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 ">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0 w-20 h-20">
                          <img
                            src={item.image || ''}
                            onClick={() => handleImageClick(item.image)}
                           srcSet={`${item.image}?w=100 100w, ${item.image}?w=200 200w, ${item.image}?w=400 400w`}
                            alt="Task Not Completed"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      {/* <p className="text-sm">$0.00</p> */}
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">
                          {item.q_id}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">
                          {item.question}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p
                          className={`${
                            item.q_flag === 'Completed'
                              ? 'text-meta-3 bg-success'
                              : 'text-meta-1 bg-meta-1'
                          } ${
                            item.q_flag === 'InProgress' &&
                            'text-warning bg-warning'
                          }  inline-flex rounded-full  bg-opacity-10 py-1 px-3 text-sm font-medium `}
                        >
                          {item.q_flag}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">
                          {item.description}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <button className="hover:text-primary">
                    <FaRocketchat size={25} />
                        </button>
                      </div>                      
                       
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        imageSrc={selectedImage}
      />
    </>
  );
};

export default FilledTable;
