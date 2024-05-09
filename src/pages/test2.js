import React from 'react';
import imgcd from "../images/download.png";
import { FaCircle ,FaUserShield } from "react-icons/fa6";
import icon from "../images/d7743555-2c9b-4f49-880f-e0aba17e1b73.jpg";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Test2() {
    return (

        <div class="grid grid-cols-7 gap-7 ml-10">
            <div class="mt-6 relative ">
                <div class="border-4 border-orange-400 rounded-full mt-6">
                    <img src={imgcd} alt='card' class=" border-2 border-white rounded-full" />
                </div>
                <FaCircle  class="text-3xl  text-green-600 absolute top-0 left-0"/>
                <FaUserShield   class="text-4xl  text-red-700 absolute top-6 left-40 "/>
                <img src={icon} alt='icon' class="w-12 absolute top-40 left-0 mt-6 "/>
                <p class="absolute left-4 top-40 text-white font-bold mt-8">12</p>
                <BsCheckCircleFill class="text-[#99CCFF] text-5xl  absolute top-40 left-40" />
            </div>
        </div>
    )
}
