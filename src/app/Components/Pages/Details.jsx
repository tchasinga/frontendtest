import React from "react";
import Secondcollection from "../../Data/Secondcollection";
import Image from 'next/image';
import Frame from '../../Img/Frame.jpg'

export default function Details() {
  return (
    <div className="  bg-blue-900 flex flex-col items-center justify-center lg:h-[572px] md:h-[100%] sm:h-[100%]">
      <div className="max-w-5xl mx-auto ">
        <div className="text-start text-3xl font-medium py-3 text-blue-700">
          <h1>Laatste nieuws</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto responsiveing">
        {Secondcollection.map((items, index) => (
          <div 
            key={index} 
            className="  border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-xl myb">
              <Image 
                src={items.myImg} 
                alt={items.title} 
                className=" h-52 w-full object-cover  hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Text content */}
            <div className="text-start p-4 childchecking">
                <div className="">
                    <p className="text-gray-700 text-sm font-medium">{items.date}</p>
                </div>
              {/* Title and rating */}
              <div className="flex items-center justify-between mb-3 ">
                <h1 className="text-xl font-bold text-blue-600">{items.title}</h1>
              </div>

              {/* Description */}
              <div className="">
                  <p className="text-blue-600 text-sm mb-4 line-clamp-3">{items.detailing}</p>
              </div>
              <div className="flex items-center justify-end  ">
                 <div className="">
                 <p className="text-xs">Lees meer</p>
                 </div>
                <div className="">
                     <Image src={Frame} alt="newNode"/>
                </div>
               </div>  
            </div>
            
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4 pt-9">
                 <div className="">
                 <p className="text-sm text-blue-600">Bekijk alle nieuwsberichten</p>
                 </div>
                <div className="">
                     <Image src={Frame} alt="newNode"/>
                </div>
               </div>  
      </div>
      
    </div>
  );
}
