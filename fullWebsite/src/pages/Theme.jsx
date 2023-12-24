

import React from 'react';
import ThemeData from '../config/ThemeData';
import Fotter from '../components/Fotter';
import img1 from '../image/theme.webp'



const WebTheme = () => {
  return (
    <div className="bg-stone-400 p-5">
      <div className='flex'>
        <div >
        <p className='text-3xl font-bold'>Professional WordPress  Theme & <br/>Website Templates for any project</p>
        <p className='mt-2'> Discover thousand of ewasyto customize theme, templates & cms<br/> anProduct, made by word class developer  </p>
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

      <div className="flex flex-wrap justify-center gap-5">
        {ThemeData.map((items, index) => (
          <div key={index} className="w-1/4 p-4">
            <div className='border p-4 rounded-xl'>
              <h1 className='text-xl font-bold text-center'>{items.heading}</h1>
              <p className='text-center mt-10'>{items.para}</p>
              <div className="flex gap-x-5 ml-12 text-blue-600 mt-4 ">
                <button className='hover:underline' >Newest</button>
                <button className='hover:underline' >Bestseller</button>
              </div>
              <img src={items.img} className='w-64 h-32 mx-auto mb-3 mt-20' />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-5 mb-5 ">
        <button className='border rounded-md py-2 px-2 bg-green-600'>View All Categories</button>
      </div>
      <Fotter/>
    </div>
  );
};

export default WebTheme;

