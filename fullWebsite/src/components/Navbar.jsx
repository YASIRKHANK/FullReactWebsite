
import React, { useState } from "react";
import { DiEnvato } from "react-icons/di";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import SignupForm from "../components/SignupForm"; // Import the SignupForm component

const Navbar = () => {
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isPopoverOpenFormus, setPopoverOpenFormus] = useState(false);
  const [isPopoverOpenSelling, setPopoverOpenSelling] = useState(false);
  const [isPopoverOpenProduct, setPopoverOpenProduct] = useState(false);

  const toggleSignupPopup = () => {
    setSignupPopupOpen(!isSignupPopupOpen);
  };

  const closeSignupPopup = () => {
    setSignupPopupOpen(false);
  };

  return (
    <div className="bg-black py-10 relative h-40">
      <div className="text-white ml-2 flex ">
        <p className="mt-2 text-2xl text-green-400">
          <DiEnvato />
        </p>
        <p className="text-2xl">
          envato<span className="text-green-400"> market</span>
        </p>

        <div className="ml-auto flex gap-x-10 font-serif">
          <button
            onClick={() => setPopoverOpenFormus(!isPopoverOpenFormus)}
            className="relative"
          >
            Formus
            {isPopoverOpenFormus && (
              <div className="absolute bg-white text-black mt-2 p-2 border border-gray-300 w-40 h-72">
                <p>
                  Formus is where creativity takes center stage. Showcase your
                  artwork, share your vision, and connect with fellow creatives.
                  Explore a world of art, design, and inspiration.
                </p>
              </div>
            )}
          </button>

          <button
            onClick={() => setPopoverOpenSelling(!isPopoverOpenSelling)}
            className="relative"
          >
            Start Selling
            {isPopoverOpenSelling && (
              <div className="absolute bg-white text-black mt-2 p-2 border border-gray-300 w-40 h-72">
                <p>
                  Ready to turn your creativity into profit? Start Selling on
                  Formus. Create, list, and sell your unique products. Reach a
                  global audience and monetize your talent.
                </p>
              </div>
            )}
          </button>

          <button
            onClick={() => setPopoverOpenProduct(!isPopoverOpenProduct)}
            className="relative"
          >
            <p className="flex">
              <PiDotsNineBold className="mt-1" /> Our products
            </p>
            {isPopoverOpenProduct && (
              <div className="absolute bg-white text-black mt-2 p-2 border border-gray-300 w-40 h-72 ">
                <p>
                  Explore a curated collection of top-notch products on Formus.
                  From art and design to handcrafted goods, our marketplace
                  offers quality items created by talented artists and
                  entrepreneurs.
                </p>
              </div>
            )}
          </button>

          <button
            onClick={toggleSignupPopup}
            className="border py-2 px-2 ml-4 rounded-md"
          >
            Signup
          </button>
          {isSignupPopupOpen && <SignupForm closeForm={closeSignupPopup} />}
        </div>

        <div>
          <button className="border py-2 px-2 ml-4 rounded-md">Signin</button>
        </div>     
      </div>

      <div>
        <nav className=" text-white mt-10 ">
          <ul className="flex gap-x-10">
            <li>
              <Link to="/" className=" font-bold px-4 py-2 rounded-md  ml-16">Web Themes & Templates</Link>
            </li>
            <li>
              <Link to="/code" className=" font-bold px-4 py-2 rounded-md  ml-16">Code</Link>
            </li>

            <li>
              <Link to="/video" className="font-bold">Video</Link>
            </li>

            <li>
              <Link to="/audio" className="font-bold">Audio</Link>
            </li>

            <li>
              <Link to="/graphic" className="font-bold">Graphic</Link>
            </li>

            <li>
              <Link to="/photos" className="font-bold">Photos</Link>
            </li> 

            <li>
              <Link to="/threed" className="font-bold"> threeD Files</Link>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

