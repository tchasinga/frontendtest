import Image from 'next/image'
import React from 'react'
import NewMore from '../../Img/OtherOone.png'

export default function More() {
  return (
    <div className=" flex flex-col justify-center items-center max-w-5xl  mx-auto lg:h-[500px] md:h-[100%] sm:h-[100%]">
    <div className="flex flex-row-reverse justify-between w-full responsive">
      {/* first flex box side */}
      <div className="relative w-[50%] w-full">
        <div className="">
          <Image src={NewMore} alt="logoOne" className="rounded-2xl w-[498px] h-[379px] w-full" />
          <div className="absolute left-[400px] bottom-[-50px] z-[-9999] right-0 ">
          <svg width="148" height="165" viewBox="0 0 148 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={{ mixBlendMode: "multiply" }} d="M31.7976 161.122C52.9105 166.869 75.1199 167.736 117.405 133.543C159.69 99.3504 149.049 40.5661 135.094 25.5269C121.139 10.4878 93.3852 -8.08987 51.0929 4.23196C8.80057 16.5538 13.1789 49.4144 14.8179 56.6872C16.457 63.96 16.8613 75.3784 6.8456 88.5936C-3.1701 101.809 -3.7416 149.766 31.7976 161.122Z" fill="url(#paint0_linear_13_430)" fill-opacity="0.8"/>
<defs>
<linearGradient id="paint0_linear_13_430" x1="45.5232" y1="165.762" x2="100.321" y2="3.46001" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD201"/>
<stop offset="1" stop-color="#FF6B38"/>
</linearGradient>
</defs>
</svg>

          </div>
        </div>
      </div>

      <div className="flex flex-col  w-full">
          <div className="py-4 text-3xl font-bold">
              <h1 className='text-orange-500 '>We verbeteren onze woningen</h1>
          </div>
          <div className="text-start first-letter:uppercase font-normal text-[16px]">
              <p>Wil je als eerste op de hoogte zijn van het laatste nieuws over</p>
              <p>jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief </p>
              <p>van KnusWonen! Iedere maand sturen we je een update met </p>
              <p>belangrijk nieuws, praktische tips, en informatie over</p>
              <p>onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten</p>
              <p>wanneer er werkzaamheden gepland zijn, of je geïnteresseerd</p>
              <p>bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt </p>
              <p>ervoor dat je niets mist.</p>
          </div>

          <div className="py-4 font-normal text-[16px]">
               <p className="">Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
               <p className="">maatregelen?</p>
          </div>

          <div className="p-4 bg-blue-500 rounded-2xl text-sm font-medium text-white w-[50%] flex items-center justify-center text-center">
               <p>Lees meer</p>
          </div>
      </div>
    </div>

  </div>
  )
}
