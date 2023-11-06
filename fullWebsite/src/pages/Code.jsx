
import React from 'react';
import codeData from '../config/CodeData';
import Fotter from '../components/Fotter'; // Make sure to import the Footer component

const WebTheme = () => {
  return (
    <div className="p-5 bg-emerald-400">
      <div>
        <p className="text-3xl font-bold">Thousand of code, Script & plugins<br/> for every website build</p>
        <p className="mt-2">
          Choose from ecommerce plugins, mobile app templates, PHP Bootstrap,<br/> and many more budget-built by the world's best developers.
        </p>
      </div>
      <div className="mb-5 mt-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-96 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {codeData.map((items, index) => (
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

export default WebTheme;
