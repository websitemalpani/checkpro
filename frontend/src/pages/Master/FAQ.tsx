import { CiEdit } from 'react-icons/ci';
import Breadcrumb from '../../components/Breadcrumb';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { GetAllQuestions } from '../../services/MasterApis';
import Paginations from '../../Helper/Pagination';
import Loader from '../../common/Loader';

const FAQ = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleQuestionType = async (flag: string) => {
    let body = {
      flag: flag,
    };
    setLoading(true);
    const response = await GetAllQuestions(body);
    setData(response);
    setLoading(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = data.filter(
    (item: any) =>
      item.question
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.u_role.toString().toLowerCase().includes(searchTerm.toLowerCase),
    // item.email.toString().toLowerCase().includes(searchTerm.toLowerCase)
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const UserData: any = localStorage.getItem('userData');
  const roles: any = JSON.parse(UserData);

  return (
    <>
      <Breadcrumb pageName="Master FAQ" />
      <span className="font-bold ">
        Select type <span className="text-meta-1">*</span>
      </span>
      <div className="flex justify-between mb-2">
        <div>
          <div className="inline-flex rounded-md shadow-sm" role="group mt-1">
            <button
              onClick={() => handleQuestionType('Admin')}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900  focus:z-10 focus:ring-2 focus:ring-primary   "
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Admin
            </button>

            <button
              type="button"
              onClick={() => handleQuestionType('Manager')}
              className="inline-flex items-center px-3 mr-3 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-lg hover:bg-gray-900  focus:z-10 focus:ring-2 focus:ring-primary   "
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Manager
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the Questions"
            className="lg:w-full h-10 sm:w-full w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : currentItems.length === 0 || null ? (
        <h2 className="flex justify-center items-center text-xl font-extrabold">
          No Any Record Found.
        </h2>
      ) : (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Q.No
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Question Name
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Week
                  </th>

                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Status
                  </th>
                  {roles.userRole === 'Master' && (
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item: any) => (
                  <tr key={item.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {item.id}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.question}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.week}</p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        {item.status}
                      </p>
                    </td>
                    {roles.userRole === 'Master' && (
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <span className="inline-flex justify-center gap-2">
                          <button className="hover:text-primary">
                            <CiEdit size={23} />
                          </button>
                          <button className="hover:text-primary">
                            <IoEyeOutline size={23} />
                          </button>
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-3">
            <Paginations
              currentPage={currentPage}
              data={data}
              itemperPage={itemsPerPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
