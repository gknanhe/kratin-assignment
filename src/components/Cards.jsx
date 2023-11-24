// import React from "react";
// import { Link } from "react-router-dom";

// const Cards = ({ title, image, link, desc }) => {
//   return (
//     <div>
//       <a
//         href={link}
//         className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//       >
//         <img
//           className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//           src={image}
//           alt=""
//         />

//         <div className="flex flex-col justify-between p-4 leading-normal">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {desc}
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default Cards;

import React from "react";

const Cards = ({ title, image, link, desc }) => {
  return (
    <div className="flex justify-center items-center flex-col md:mx-4  ">
      <a
        href={link}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-11/12 md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-full md:h-[240px] rounded-t-lg  md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Cards;
