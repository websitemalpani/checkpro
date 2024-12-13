import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { GetAllMembers } from '../../services/MasterApis';
import { CiEdit } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import Loader from '../../common/Loader';
import Paginations from '../../Helper/Pagination';
import EditMemberModal from './EditMemberModal';
import ViewMember from './ViewMember';

const Member = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ViewModal, setViewModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = data.filter(
    (item: any) =>
      item.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.loc_name.toString().toLowerCase().includes(searchTerm.toLowerCase) ||
      item.email.toString().toLowerCase().includes(searchTerm.toLowerCase),
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchData = async () => {
    setloading(true);
    const response = await GetAllMembers();
    setData(response);
    setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //  if (currentItems.length === 0) {
  //    return <h1>no data found</h1>
  //  }
  const UserData: any = localStorage.getItem('userData');
  const roles: any = JSON.parse(UserData);

  const handleEdit = (item: any) => {
    setSelectedMember(item);
    setShowModal(true);
  };
  const handleView = (item:any)=>{
    setSelectedMember(item);
    setViewModal(true);
  }
 
  return (
    <>
      <Breadcrumb pageName="Member Table" />
      <div className="flex justify-end gap-2 mb-2">
        <div></div>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the members"
            className="lg:w-full sm:w-full w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
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
                    Member Name
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Location
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Mobile
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    email
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
                        {item.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.loc_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.mobile}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-1 dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.email}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full ${
                          item.status === 'A'
                            ? 'bg-success text-success'
                            : 'bg-meta-1 text-meta-1'
                        } bg-opacity-10 py-1 px-3 text-sm font-medium `}
                      >
                        {item.status  === "A" ? "Active" : "InActive"}
                      </p>
                    </td>
                    {roles.userRole === 'Master' && (
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <span className="inline-flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="hover:text-primary"
                          >
                            <CiEdit size={23} />
                          </button>
                          <button onClick={()=>handleView(item)} className="hover:text-primary">
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
          <EditMemberModal
            onSave={fetchData}
            selectedMember={selectedMember}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <ViewMember
           ViewModal={ViewModal}
           selectedMember={selectedMember}
            setViewModal={setViewModal}/>
        
        </div>
      )}
    </>
  );
};

export default Member;
