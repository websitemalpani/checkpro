import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaUserEdit } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { EditMember } from '../../services/MasterApis';
import { GetLocations } from '../../services/Auth.Apis';

const EditMemberModal = ({
  showModal,
  setShowModal,
  selectedMember,
  onSave,
}: any) => {
  const [Inputs, setInputs] = useState({
    name: '',
    email: '',
    status: '',
    location: '',
  });
  const [Locations, SetLocations] = useState([]);
  const [loading, setloading] = useState(false);
  //api req for get locations
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetLocations();
      SetLocations(response);
    };
    fetchData();
  }, []);

  //handling user inputs
  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let body = {
      id: selectedMember.id,
      name: Inputs.name,
      email: Inputs.email,
      status: Inputs.status,
      loc_id: Inputs.location,
    };
    setloading(true);
    await EditMember(body);
    setTimeout(() => {
      setloading(false);
      onSave();
      setShowModal(false);
    }, 500);
  };

  if (!showModal) return null;
  return (
    <>
      <div className="fixed rounded-2xl inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className=" p-4 rounded-2xl w-full max-w-lg">
          <div className="flex flex-col gap-9">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white inline-flex text-xl">
                  {' '}
                  <FaUserEdit className="mr-1 mt-1.1" size={23} />
                  Edit Member
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Member name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleInputs}
                        defaultValue={selectedMember.name}
                        placeholder="Enter name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleInputs}
                        defaultValue={selectedMember.email}
                        placeholder="Enter name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 sm:flex-row">
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Select Status
                      </label>
                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <IoPersonOutline size={20} />
                        </span>
                        <select
                          name="status"
                          onChange={handleInputs}
                          defaultValue={selectedMember.status}
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                        >
                          <option value="">Select Status</option>
                          <option value="A">Active</option>
                          <option value="I">InActive</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Select Location
                      </label>
                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <CiLocationOn size={20} />
                        </span>
                        <select
                          name="location"
                          onChange={handleInputs}
                          defaultValue={selectedMember.loc_name}
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                        >
                          <option value="">Select Location</option>
                          {Locations?.map((item: any) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="flex h-10 w-1/2 items-center  justify-center rounded bg-primary p-3 font-medium text-gray mt-4 sm:mt-6">
                      {loading ? 'Loading...' : 'Update'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="mt-4 flex justify-end bg-black text-white py-2 px-4 rounded hover:bg-opacity-90 sm:mt-6"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMemberModal;
