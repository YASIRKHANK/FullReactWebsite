

import { PiIntersectThreeLight } from "react-icons/pi";
import { RiTempHotFill } from "react-icons/ri";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { BsBoxes } from "react-icons/bs";
import { CgPlayButtonO } from "react-icons/cg";
import { FaPersonRunning } from "react-icons/fa6";





const ThreeData =[
    {
        icon: <PiIntersectThreeLight className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-pink-400"/>, 
        heading:"3D Models",
        para:"3D models, objects and 3D printing files",      
        
     },
    {
        icon: <RiTempHotFill  className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-yellow-800" />,
        heading:"CG Textures",
        para:"Computer-generated textures",
       
    },
    {
        icon: <HiMiniBuildingStorefront className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-sky-300"/>,
        heading:"Materials & Shaders",
        para:"High-quality 3D shaders and materials",
       
    },

    { 
        icon:<BsBoxes className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-yellow-500"/>,
        heading:"Scripts & Plugins",
        para:"Thousands of scripts and plugins",
       
    },
    
    {
        icon:<CgPlayButtonO className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-green-500"/>,
        heading:"Render Setups",
        para:"Set the scene with our render setups",
       
    },
    
    {
        icon:<FaPersonRunning className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-teal-500"/>,
        heading:" Animation Data",
        para:"Animation templates for your next piec",
        
    }
]

export default ThreeData




  