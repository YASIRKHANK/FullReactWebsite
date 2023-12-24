
import React from 'react';
import ThreeData from '../config/ThreeData';
import Fotter from '../components/Fotter'; 
import img1 from '../image/boat.webp'

const ThreeD = () => {
  return (
    <div className="p-5">
      <div className='flex'>
      <div>
        <p className="text-3xl font-bold">41,489 3D print models and<br/> CG textures from $2</p>
        <p className="mt-2">
        Discover our hand-reviewed collection of 3D assets from our community of 3D artists.
        </p>
      </div>
      <div className=' ml-52 '>
      <img src={img1}  />
      </div>
      </div>
      <div >
        <input
          type="text"
          placeholder="Search..."
          className="w-96 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5 ">
        {ThreeData.map((items, index) => (
          <div key={index} className="w-full md:w-1/4 lg:w-1/4  p-4"> 
            <p className="ml-28">{items.icon}</p>
            <div className="border p-4 rounded-xl">
              <h1 className="text-xl font-bold text-center">{items.heading}</h1>
              <p className="text-center mt-10">{items.para}</p>
              <div className="flex gap-x-5 justify-center mt-4"> 
                <button className="hover:underline text-sky-600">Newest</button>
                <button className="hover:underline  text-sky-600">Bestseller</button>
              </div>
              
            </div>s
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-5 mb-5">
        <button className="border rounded-md py-2 px-2 bg-green-600">View All Categories</button>
      </div>
      <Fotter className="bg-black text-white py-20 w-full" style={{ width: '100%' }} />

    </div>
  );
};

export default ThreeD;

