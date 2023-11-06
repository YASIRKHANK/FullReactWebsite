


import React from 'react';
import { Link } from 'react-router-dom';
import { DiEnvato } from 'react-icons/di';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 w-full">
      <div className=" flex   gap-10">
        <div className="w-full md:w-1/4 lg:w-1/4 ml-5" >
          <h4 className="text-lg font-bold">ENVATO MARKET</h4>
          <ul>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/licenses">Licenses</Link></li>
            <li><Link to="/market-api">Market API</Link></li>
            <li><Link to="/affiliate">Become an Affiliate</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/4">
          <h4 className="text-lg font-bold">HELP</h4>
          <ul>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/author">Author</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/4">
          <h4 className="text-lg font-bold">OUR COMMUNITY</h4>
          <ul>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/meetups">Meetups</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/4">
          <h4 className="text-lg font-bold">MEET ENVATO</h4>
          <ul>
            <li><Link to="/about-envato">About Envato</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/4">
          <div className='flex'>
            <p className="mt-2 text-2xl text-green-400">
              <DiEnvato />
            </p>
            <h1 className="text-2xl">
              envato<span className="text-green-400"> market</span>
            </h1>
          </div>
          <div className='flex gap-x-5'>
            <div>
              <p>7863473r48</p>
              <p>items sold</p>
            </div>
            <div>
              <p>$347856</p>
              <p>Community earning</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
