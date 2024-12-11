import Breadcrumb from '../components/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';


const Profile = () => {
  const name:any = localStorage.getItem("userData");
  const user = JSON.parse(name)
   
  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <span>
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img className='rounded-full' src={'data:image/jpeg;base64,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'} alt="profile" />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"                  
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                    fill=""
                  />
                </svg>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.userFName} {""} {user?.userLName}
            </h3>
            <p className="font-medium">{user?.userRole}</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Follow me on
              </h4>
              <div className="flex items-center justify-center gap-3.5">
                <a
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_966)">
                      <path
                        d="M12.8333 12.375H15.125L16.0416 8.70838H12.8333V6.87504C12.8333 5.93088 12.8333 5.04171 14.6666 5.04171H16.0416V1.96171C15.7428 1.92229 14.6144 1.83337 13.4227 1.83337C10.934 1.83337 9.16663 3.35229 9.16663 6.14171V8.70838H6.41663V12.375H9.16663V20.1667H12.8333V12.375Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_966">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_970)">
                      <path
                        d="M20.9813 5.18472C20.2815 5.49427 19.5393 5.69757 18.7795 5.78789C19.5804 5.30887 20.1798 4.55498 20.4661 3.66672C19.7145 4.11405 18.8904 4.42755 18.0315 4.59714C17.4545 3.97984 16.6898 3.57044 15.8562 3.43259C15.0225 3.29474 14.1667 3.43617 13.4218 3.83489C12.6768 4.2336 12.0845 4.86726 11.7368 5.63736C11.3891 6.40746 11.3056 7.27085 11.4993 8.0933C9.97497 8.0169 8.48376 7.62078 7.12247 6.93066C5.76118 6.24054 4.56024 5.27185 3.59762 4.08747C3.25689 4.67272 3.07783 5.33801 3.07879 6.01522C3.07879 7.34439 3.75529 8.51864 4.78379 9.20614C4.17513 9.18697 3.57987 9.0226 3.04762 8.72672V8.77439C3.04781 9.65961 3.35413 10.5175 3.91465 11.2027C4.47517 11.8878 5.2554 12.3581 6.12304 12.5336C5.55802 12.6868 4.96557 12.7093 4.39054 12.5996C4.63517 13.3616 5.11196 14.028 5.75417 14.5055C6.39637 14.983 7.17182 15.2477 7.97196 15.2626C7.17673 15.8871 6.2662 16.3488 5.29243 16.6212C4.31866 16.8936 3.30074 16.9714 2.29688 16.8502C4.04926 17.9772 6.08921 18.5755 8.17271 18.5735C15.2246 18.5735 19.081 12.7316 19.081 7.66522C19.081 7.50022 19.0765 7.33339 19.0691 7.17022C19.8197 6.62771 20.4676 5.95566 20.9822 5.18564L20.9813 5.18472Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_970">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.666138)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_974)">
                      <path
                        d="M6.69548 4.58327C6.69523 5.0695 6.50185 5.53572 6.15786 5.87937C5.81387 6.22301 5.34746 6.41593 4.86123 6.41569C4.375 6.41545 3.90878 6.22206 3.56513 5.87807C3.22149 5.53408 3.02857 5.06767 3.02881 4.58144C3.02905 4.09521 3.22244 3.62899 3.56643 3.28535C3.91042 2.9417 4.37683 2.74878 4.86306 2.74902C5.34929 2.74927 5.81551 2.94265 6.15915 3.28664C6.5028 3.63063 6.69572 4.09704 6.69548 4.58327ZM6.75048 7.77327H3.08381V19.2499H6.75048V7.77327ZM12.5438 7.77327H8.89548V19.2499H12.5071V13.2274C12.5071 9.87244 16.8796 9.56077 16.8796 13.2274V19.2499H20.5005V11.9808C20.5005 6.32494 14.0288 6.53577 12.5071 9.31327L12.5438 7.77327Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_974">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.333862)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_978)">
                      <path
                        d="M18.3233 10.6077C18.2481 9.1648 17.7463 7.77668 16.8814 6.61929C16.6178 6.90312 16.3361 7.16951 16.038 7.41679C15.1222 8.17748 14.0988 8.79838 13.0011 9.25929C13.1542 9.58013 13.2945 9.89088 13.4182 10.1842V10.187C13.4531 10.2689 13.4867 10.3514 13.519 10.4345C14.9069 10.2786 16.3699 10.3355 17.788 10.527C17.9768 10.5527 18.1546 10.5802 18.3233 10.6077ZM9.72038 3.77854C10.6137 5.03728 11.4375 6.34396 12.188 7.69271C13.3091 7.25088 14.2359 6.69354 14.982 6.07296C15.2411 5.8595 15.4849 5.62824 15.7117 5.38088C14.3926 4.27145 12.7237 3.66426 11 3.66671C10.5711 3.66641 10.1429 3.70353 9.72038 3.77762V3.77854ZM3.89862 9.16396C4.52308 9.1482 5.1468 9.11059 5.76863 9.05121C7.27163 8.91677 8.7618 8.66484 10.2255 8.29771C9.46051 6.96874 8.63463 5.67578 7.75046 4.42296C6.80603 4.89082 5.97328 5.55633 5.30868 6.37435C4.64409 7.19236 4.16319 8.14374 3.89862 9.16396ZM5.30113 15.6155C5.65679 15.0957 6.12429 14.5109 6.74488 13.8747C8.07771 12.5089 9.65071 11.4455 11.4712 10.8589L11.528 10.8424C11.3768 10.5087 11.2347 10.2108 11.0917 9.93029C9.40871 10.4207 7.63588 10.7269 5.86946 10.8855C5.00779 10.9634 4.23504 10.9973 3.66671 11.0028C3.66509 12.6827 4.24264 14.3117 5.30204 15.6155H5.30113ZM13.7546 17.7971C13.4011 16.0144 12.9008 14.2641 12.2586 12.5639C10.4235 13.2303 8.96138 14.2047 7.83113 15.367C7.375 15.8276 6.97021 16.3362 6.62388 16.8841C7.88778 17.8272 9.42308 18.3356 11 18.3334C11.9441 18.3347 12.8795 18.1533 13.7546 17.799V17.7971ZM15.4715 16.8117C16.9027 15.7115 17.8777 14.1219 18.2096 12.3475C17.898 12.2696 17.5029 12.1917 17.0684 12.1312C16.1023 11.9921 15.1221 11.9819 14.1534 12.101C14.6988 13.6399 15.1392 15.2141 15.4715 16.8126V16.8117ZM11 20.1667C5.93729 20.1667 1.83337 16.0628 1.83337 11C1.83337 5.93729 5.93729 1.83337 11 1.83337C16.0628 1.83337 20.1667 5.93729 20.1667 11C20.1667 16.0628 16.0628 20.1667 11 20.1667Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_978">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_982)">
                      <path
                        d="M11.6662 1.83337C6.6016 1.83337 2.49951 5.93546 2.49951 11C2.49847 12.9244 3.10343 14.8002 4.22854 16.3613C5.35366 17.9225 6.94181 19.0897 8.76768 19.6974C9.22602 19.7771 9.39743 19.5021 9.39743 19.261C9.39743 19.0438 9.38552 18.3224 9.38552 17.5542C7.08285 17.9786 6.48701 16.9932 6.30368 16.4771C6.2001 16.2131 5.75368 15.4 5.3641 15.1819C5.04326 15.0105 4.58493 14.586 5.35218 14.575C6.07451 14.5631 6.58968 15.2396 6.76201 15.5146C7.58701 16.9006 8.90518 16.511 9.43135 16.2709C9.51202 15.675 9.75218 15.2745 10.0162 15.0453C7.9766 14.8161 5.84535 14.025 5.84535 10.5188C5.84535 9.52146 6.2001 8.69737 6.78493 8.05479C6.69326 7.82562 6.37243 6.88604 6.8766 5.62562C6.8766 5.62562 7.64385 5.38546 9.39743 6.56612C10.1437 6.35901 10.9147 6.25477 11.6891 6.25629C12.4683 6.25629 13.2474 6.35896 13.9808 6.56521C15.7334 5.37354 16.5016 5.62654 16.5016 5.62654C17.0058 6.88696 16.6849 7.82654 16.5933 8.05571C17.1772 8.69737 17.5329 9.51046 17.5329 10.5188C17.5329 14.037 15.3906 14.8161 13.351 15.0453C13.6829 15.3313 13.9698 15.8813 13.9698 16.7411C13.9698 17.9667 13.9579 18.9521 13.9579 19.262C13.9579 19.5021 14.1302 19.7881 14.5885 19.6965C16.4081 19.0821 17.9893 17.9126 19.1094 16.3526C20.2296 14.7926 20.8323 12.9206 20.8329 11C20.8329 5.93546 16.7308 1.83337 11.6662 1.83337Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_982">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.666138)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
