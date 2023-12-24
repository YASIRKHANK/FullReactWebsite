

import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubNavbar() {
  const [showContent, setShowContent] = useState("");
  const items = [
    "All Items",
    "PHP Scripts",
    "Ecommerce",
    "JavaScript",
    "CSS",
    "Mobile",
    "HTML5",
    "AI Tools",
    "WP Themes",
    "Plugins",
    "Mockup Generator ",
    "More",
  ];

  // Function to handle hover and set the currently hovered item
  const handleHover = (item) => {
    setShowContent(item);
  };

  // Function to handle leaving the hover and hide content for the item
  const handleLeave = () => {
    setShowContent("");
  };

  return (
    <nav className="">
      <ul className="flex gap-x-5">
        {items.map((item) => (
          <li key={item} className="relative">
            <div
              onMouseEnter={() => handleHover(item)}
              onMouseLeave={handleLeave}
            >
              <Link to="#">{item}</Link>
              {showContent === item && (
                <div className="absolute top-full bg-white border ">
                  {item === "All Items" && (  
                    <div className="w-48 ">
                      <Link to="#"  className="hover:bg-gray-500">Featured Files</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Top new Files</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Popular Files</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Followed Feed</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Top New Authors</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Public collection</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">View All Categories</Link>
                      <br />
                    </div>
                  )}
                  {item === "PHP Scripts" && (
                    <div className="w-52 p-2">
                      <Link to="#" className="hover:bg-gray-500">Popular Files</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Add-ons</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Calendars</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Database abstractions</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Forms</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Help and Support tools</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Images and media</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Loaders and uploaders</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Navigation</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">News Tickers</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Polls</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Project Management Tools</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Rating and charts</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Search</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Shopping Carts</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Social Networking</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}
                  {item === "Ecommerce" && (
                    <div className="w-52  p-2">
                      <Link to="#" className="hover:bg-gray-500">Easy Digital Download</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Jigoshop</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Mangento Extensions</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Database abstractions</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">OpenCart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">osCommerce</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Prestashop</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">UberCart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">VirtueMart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">News Tickers</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">WooCommerce</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">WP eCommerece</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Zen Cart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}
                  {item === "JavaScript" && (
                    <div className="w-52  p-2">
                      <Link to="#" className="hover:bg-gray-500">Popular items</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Animated SVGs</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Calendars</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Countdowns</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Database Abstractions</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Forms</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Images and Media</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Loaders</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Media</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Navigation</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">News Tickers</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Project Management Tools</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Ratings and Charts</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Shopping Carts</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Slider</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Social Networking</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}
                  {item === "CSS" && (
                    <div className="w-52  p-2">
                      <Link to="#" className="hover:bg-gray-500">Popular items</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Animation and Effects</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Buttons</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Charts and Graphs</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Forms</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Layout</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Navigation and Menus</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Pricing Tables</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Tabs and Sliders</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}
                  {item === "Mobile" && (
                    <div className="w-24  ml-2">
                      <Link to="#" className="hover:bg-gray-500">Android</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Flutter</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">iOS</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Native Web</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Titanium</Link>
                      <br />
                    </div>
                  )}
                  {item === "HTML5" && (
                    <div className="w-52  p-2">
                      <Link to="#" className="hover:bg-gray-500">3D</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Ad Templates</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Canvas</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Charts and Graphs</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Forms</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Games</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Libraries</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Media</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Presentations</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Slider</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Storage</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Templates</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}

                  {item === "AI Tools" && (
                    <div className="w-80  p-2">
                      <Link to="#" className="hover:bg-gray-500">Popular items</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">AI Writers and Content Generators</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">AI Images and Videos Generators</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Charts and Graphs</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">AI Chatbots</Link>
                    </div>
                  )}

                  {item === "Plugins" && (
                    <div className="w-52 p-2">
                      <Link to="#" className="hover:bg-gray-500">Popular item</Link>
                      <hr />
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Concrete5</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Drupals</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">ExpressionEngine</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Muse Widgets</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">OpenCart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">osCommerece</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Prestashop</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Ubercart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">VirtueMart</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Zen Cart</Link>
                      <br /> 
                      <Link to="#" className="hover:bg-gray-500">Miscellaneous</Link>
                      <br />
                    </div>
                  )}

                  {item === "More" && (
                    <div className="w-52 p-2">
                      <Link to="#" className="hover:bg-gray-500">.Net</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Apps</Link>
                      <br />
                      <Link to="#" className="hover:bg-gray-500">Facebook</Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubNavbar;


