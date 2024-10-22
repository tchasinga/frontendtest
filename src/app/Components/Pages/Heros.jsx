import React from 'react'
import Etension from './Etension'

export default function Heros() {
  return (
    <div className="h-[650px] relative object-fill pt-[5%] bgImga">
      {/* first svg */}
      <div className="absolute right-0 bottom-0">
        <svg
          
          className='lg:w-[314px] lg:h-[538px] md:w-[100%] sm:w-[340px]'
          viewBox="0 0 214 538"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ mixBlendMode: "multiply" }} // Corrected style prop
            d="M345.939 0.0632245C467.872 -2.23958 592.556 58.4148 619.22 173.622C645.885 288.829 678.317 352.11 697.497 404.684C716.677 457.258 737.61 609.917 612.093 691.544C486.576 773.17 249.444 855.922 62.8811 540.817C-127.239 219.694 156.689 -3.98725 345.939 0.0632245Z"
            fill="url(#paint0_linear_4_98)"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4_98"
              x1="677.824"
              y1="355.461"
              x2="-0.00367179"
              y2="359.432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#35BCE7" />
              <stop offset="1" stopColor="#BFE27D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* second svg */}
      <div className='absolute top-0'>
      <svg width="330" height="296" viewBox="0 0 109 296" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  style={{ mixBlendMode: "multiply" }} d="M61.7388 -107.825C99.4297 -64.1971 126.772 -12.4088 93.6573 126.995C60.5426 266.398 -91.2568 308.032 -142.88 291.991C-194.503 275.95 -270.242 231.149 -289.106 116.624C-307.971 2.10028 -224.901 -24.9032 -205.754 -29.2875C-186.606 -33.6719 -159.012 -45.7095 -139.011 -84.5531C-119.01 -123.397 -5.70175 -179.348 61.7388 -107.825Z" fill="url(#paint0_linear_4_99)" fill-opacity="0.8"/>
<defs>
<linearGradient id="paint0_linear_4_99" x1="88.3908" y1="-80.4916" x2="-234.901" y2="234.482" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD201"/>
<stop offset="1" stop-color="#FF6B38"/>
</linearGradient>
</defs>
</svg>

      </div>

    {/* my last svg design ... */}
    <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center justify-center ">
      <svg className='lg:w-[1088px] lg:h-[211px] md:w-[100%] sm:w-[40px]' viewBox="0 0 1088 211" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="wave" d="M542.651 543.818C669.462 559.813 966.58 573.209 1068.46 378.913C1146.48 174.423 964.145 116.005 798.414 103.929C555.621 87.9768 607.707 34.7851 371.265 4.24617C162.725 -21.4766 14.4774 85.6485 1.24134 210.401C-11.9947 335.154 94.1089 406.423 164.819 441.264C235.529 476.106 370.386 522.679 542.651 543.818Z" fill="url(#paint0_linear_5_102)" fill-opacity="0.8"/>
     <defs>
    <linearGradient id="paint0_linear_5_102" x1="974.855" y1="135.739" x2="739.562" y2="668.843" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8F58B7"/>
      <stop offset="1" stop-color="#FB81B6"/>
    </linearGradient>
     </defs>
  </svg>
      </div>
      <div className="absolute bottom-4 right-0 lg:left-[110px] md:left-0 flex flex-col items-center justify-center">
         <Etension />
      </div>
    </div>
  )
}
