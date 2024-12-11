import { Link, useNavigate } from 'react-router-dom';
// import LogoDark from '../../images/logo/logo-dark.svg';
import Home from '../../images/home page .png';
import { CiLocationOn, CiMail, CiPhone, CiUser } from 'react-icons/ci';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { GetLocations, Register } from '../../services/Auth.Apis';
const SignUp = () => {
  const [Inputs, setInputs] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    password: '',
    location: '',
  });
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(Inputs);
    let body = {
      fname: Inputs.fname,
      lname: Inputs.lname,
      email: Inputs.email,
      mobile: Inputs.mobile,
      password: Inputs.password,
      loc_id: Inputs.location,
    };
    const response = await Register(body);
    if (response === 201) {
      navigate('/auth/signin');            
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetLocations();
      setData(response);
    };
    fetchData();
  }, []);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex  flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-4 text-center max-h-full min-h-screen">
              <span className="inline-block rounded-xl mt-6 w-full">
                <img
                  className="object-cover w-full h-[40rem]" // Increased the height
                  src={Home}
                  alt="Home"
                />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to CheckPro
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      First Name<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={Inputs?.fname}
                        onChange={handleInputs}
                        type="text"
                        name="fname"
                        placeholder="Enter your first name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <CiUser size={27} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Last Name<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={Inputs?.lname}
                        onChange={handleInputs}
                        name="lname"
                        placeholder="Enter your last name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <CiUser size={27} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={Inputs?.email}
                        onChange={handleInputs}
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <CiMail size={27} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Mobile<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={Inputs?.mobile}
                        onChange={handleInputs}
                        name="mobile"
                        placeholder="Enter your mobile number"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <CiPhone size={27} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Location<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="location"
                        value={Inputs?.location}
                        onChange={handleInputs}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="Select Location">Select Location</option>
                        {data.map((item: any) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-4">
                        <CiLocationOn size={27} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password<span className='text-meta-1'>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={show ? 'text' : 'password'}
                        value={Inputs?.password}
                        onChange={handleInputs}
                        name="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span
                        onClick={handleToggle}
                        className="absolute right-4 top-4"
                      >
                        {show ? (
                          <IoEyeOutline size={27} />
                        ) : (
                          <IoEyeOffOutline size={27} />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
                Re-type Password
            </label>
            <div className="relative">
                <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4">
                    <MdLockOutline size={27} />
                </span>
            </div>
        </div> */}
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
