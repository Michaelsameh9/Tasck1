import React from 'react';
import imcard from "../images/download.png";
import { CiStar } from "react-icons/ci";

export default function Card() {
    return (
        <div class="grid grid-cols-3 gap-3  mt-6" >
            <div class="border-2 rounded border-color: rgb(168 162 158);  items-center  px-9 py-8">
                <div class="flex">
                    <img src={imcard} alt='card' class="w-24 rounded-full ..." />
                    <p class="font-serif ml-20 text-green-400 text-xl font-bold mt-9">Mailchimp</p>
                    <CiStar class="text-3xl  text-green-400 ml-20 " />
                </div>
                <p class="text-3xl font-bold font-serif pt-6">Website Designer Required For Directory Theme</p>
                <p class="text-neutral-400 text-xl pt-6 tracking-wide	">$125-$135 Hourly | 1-5Days <br/>|Expensive | Remote</p>
            </div>
        </div>
    )
}
