

import React from 'react';
import PhotoData from '../config/PhotoData';
import Fotter from '../components/Fotter';
import img1 from '../image/pohto.webp';



const Photos = () => {
  return (
    <div className="p-5 ">
      <div className="flex">
        <div>
          <p className="text-3xl font-bold">Royalty free stock photos<br/> from $2</p>
          <p className="mt-2 ">
            Discover our collection of royalty free stock images from our community of photographers.
          </p>
        </div>
        <div className="ml-52 ">
          <img src={img1} alt="Stock" />
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-96 h-12 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex ml-14 gap-5 ">
        {/* Render the first card separately on the left side */}
        <div className="w-full md:w-1/4 p-4 ">
          <div className="border p-2 rounded-xl">
            <h1 className="text-xl font-bold text-center mt-28">{PhotoData[0].heading}</h1>
            <p className="text-center mt-10">{PhotoData[0].para}</p>
            <div className="flex gap-x-5 justify-center mt-7 bg-green-600 py-3 rounded-md mb-28 text-white ">
              <button className="hover:underline">View All featured photos</button>
             
            </div>
           
          </div>
        </div>

        {/* Render the remaining four cards on the right side */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-between  ml-12">
          {PhotoData.slice(1).map((items, index) => (
            <div key={index} className="w-full md:w-72 p-4">
              <div className="border  rounded-xl">
              <img src={items.img} className="w-full " alt="Graphic" />
                <p className="text-center mt-10">{items.para}</p>
                <div className="flex gap-x-5 justify-between mt-4">
                 <p className='ml-4'>$5</p>
                 <p className='mr-4'>{items.icon}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-5 mb-5">
        <button className="border rounded-md py-2 px-2 bg-green-600">View All Categories</button>
      </div>
      <Fotter className="bg-black text-white py-20 w-full" style={{ width: '100%' }} />
    </div>
  );
};

export default Photos;
