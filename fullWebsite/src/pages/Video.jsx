
import React from 'react';
import VideoData from '../config/VideoData';
import Fotter from '../components/Fotter'; // Make sure to import the Footer component
import img1 from '../image/video.webp'


const Video = () => {
  return (
    <div className="p-5 bg-zinc-600">
      <div className='flex'>
      <div>
        <p className="text-3xl font-bold">6,510,473 Stock Footage,<br/> Video Effects & Video<br/> Templates</p>
        <p className="mt-2">
        Royalty free videos and templates created by video professionals from <br/>all over the world.
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

      <div className="flex flex-wrap justify-center gap-5">
        {VideoData.map((items, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4"> {/* Adjust the column width based on your design */}
            <div className="border p-4 rounded-xl">
              <h1 className="text-xl font-bold text-center">{items.heading}</h1>
              <p className="text-center mt-10">{items.para}</p>
              <div className="flex gap-x-5 justify-center mt-4"> {/* Center align the buttons */}
                <button className="hover:underline">Newest</button>
                <button className="hover:underline">Bestseller</button>
              </div>
              <img src={items.img} className="w-64 h-32 mx-auto mt-5" /> {/* Adjust the image placement */}
            </div>
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

export default Video;
