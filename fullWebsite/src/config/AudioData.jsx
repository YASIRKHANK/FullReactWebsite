

import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import { GiMusicalScore } from "react-icons/gi";
import { AiTwotoneSound } from "react-icons/ai";
import { BiLogoSlack } from "react-icons/bi";
import { PiMusicNotesThin } from "react-icons/pi";
import { PiFilesDuotone } from "react-icons/pi";





const AudioData=[
    {
        icon: <BsFillFileEarmarkMusicFill className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-pink-400"/>, 
        heading:"Music",
        para:"Royalty-free music clips for your next project ",      
        
     },
    {
        icon: <GiMusicalScore className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-yellow-800" />,
        heading:"Music Packs",
        para:"Different tracks related to the same genre",
       
    },
    {
        icon: <AiTwotoneSound className="mt-5 ml-5 w-10 h-10 text-center border rounded-full bg-sky-300"/>,
        heading:"Sound Effects",
        para:"All the Sound Effects for your next project",
       
    },

    { 
        icon:<BiLogoSlack className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-yellow-500"/>,
        heading:"Logos & Idents",
        para:"Individual drag-and-drop song audio sections",
       
    },
    
    {
        icon:<PiMusicNotesThin className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-green-500"/>,
        heading:"Music Kits",
        para:"Openers, Elements and more",
       
    },
    
    {
        icon:<PiFilesDuotone className="mt-5 ml-5 w-8 h-8 text-center border rounded-full bg-teal-500"/>,
        heading:" Individual drag-and-drop song audio sections",
        para:"udio for Cubase, Logic Pro and FL Studio experts",
        
    }
]

export default AudioData




  