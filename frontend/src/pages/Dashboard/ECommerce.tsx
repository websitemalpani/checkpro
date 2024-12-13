
import { Link } from 'react-router-dom';
import Logo from "../../images/home page .png"
import { FaArrowRight } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

const ECommerce = () => {


  const userData: any = localStorage.getItem('userData');
  const roles = JSON.parse(userData);
  
  return (
    <>
   
{/* <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"> */}
 
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Stay updated Stay relevent with <span className="text-primary">CheckPro!</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Your Trusted Destination for Quality Groceries and Daily Essentials.</p>

   
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        
        <Link
              to="/transaction/FAQ"
              className="inline-flex items-center h-13 rounded-lg justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
              <FaArrowRight size={20} />
              </span>
             Get Started
            </Link>


            {(roles.userRole === "Admin" || roles.userRole === "Master") && (  
               <Link
               to="/progress"
               className="inline-flex items-center h-13 rounded-lg justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
             >
               <span>
               <GiProgression size={20} />
               </span>
              Go to Dashboard
             </Link>     
      )}

           
      </div>        
    </div>
    

    <div className="relative ms-4">
      <img className="w-full rounded-md" src={Logo} alt="Hero Image"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

      
      {/* <div className="absolute bottom-0 start-0">
        <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div> */}
      
    </div>
    
  </div>  



    </>
  );
};

export default ECommerce;
