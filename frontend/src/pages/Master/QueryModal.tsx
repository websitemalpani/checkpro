import { FaUserEdit } from 'react-icons/fa';
import { IoMdSend } from "react-icons/io";
import { toast } from 'react-toastify';
const QueryModal = ({ showModal, setShowModal }: any) => {
  if (!showModal) return null;
  return (
    <div className="fixed rounded-2xl inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" p-4 rounded-2xl w-full max-w-lg">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}          
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white inline-flex text-xl">
                {' '}
         
                <FaUserEdit className="mr-1 mt-1.1" size={23} />
                Send Description Regarding Answers
              </h3>
            </div>
            <form>
              <div className='p-4'>
                <label className="mb-3 block text-black dark:text-white">
                 Description<span className='text-meta-1'>*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter The Description"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>
              <div className='flex justify-between p-4'>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="mt-4 flex justify-end bg-black text-white py-2 px-4 rounded hover:bg-opacity-90 sm:mt-6"
              >
                Close
              </button>
              <button
                type="button"
                onClick={()=>toast.success("The Description Has Been Sent")}
                
               
                className="mt-4 flex justify-end bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 sm:mt-6"
              >
               Send<IoMdSend className='ml-2 ' size={22}/>
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryModal;
