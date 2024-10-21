import React from "react";
import Image from "next/image";
import ImgOne from "../../Img/newImg.png";

export default function Aboutus() {
  return (
    <div className=" flex flex-col justify-center items-center max-w-5xl  mx-auto h-[500px]">
      <div className="flex justify-between w-full">
        {/* first flex box side */}
        <div className="relative w-[50%]">
          <div className="w-[496px] h-[372px] ">
            <Image src={ImgOne} alt="logoOne" className="rounded-2xl" />
            <div className="absolute left-[-100px] z-[-9999] right-0 bottom-[150px]">
            <svg
              width="269"
              height="271"
              viewBox="0 0 269 271"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ mixBlendMode: "multiply" }}
                d="M8.22408 84.7961C-6.61283 125.694 -0.457604 174.798 35.4628 197.117C71.3833 219.435 89.0631 237.698 104.647 250.25C120.23 262.802 169.488 287.515 211.587 254.576C253.686 221.636 309.034 151.146 223.888 51.7402C137.115 -49.5619 28.6715 20.4372 8.22408 84.7961Z"
                fill="url(#paint0_linear_13_416)"
                fill-opacity="0.8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_416"
                  x1="90.254"
                  y1="237.919"
                  x2="169.737"
                  y2="9.54206"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#35BCE7" />
                  <stop offset="1" stop-color="#BFE27D" />
                </linearGradient>
              </defs>
            </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[50%]">
            <div className="py-4 text-blue-600 text-3xl font-bold">
                <h1>We verbeteren onze woningen</h1>
            </div>
            <div className="text-start first-letter:uppercase font-normal text-[16px]">
                <p>Bij KnusWonen zetten we ons in om onze woningen </p>
                <p>Energiezuiniger en duurzamer te maken. We verbeteren de</p>
                <p>isolatie met dubbelglas en plaatsen moderne cv-ketels en </p>
                <p>zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de</p>
                <p>energiekosten, en verminderen we de CO2-uitstoot. Ons doel</p>
                <p>is dat al onze huurders kunnen genieten van een warme,</p>
                <p>veilige en toekomstbestendige woning.</p>
            </div>

            <div className="py-4 font-normal text-[16px]">
                 <p className="">Wilt u meer weten over onze energiebesparende </p>
                 <p className="">maatregelen?</p>
            </div>

            <div className="p-4 bg-blue-500 rounded-2xl text-sm font-medium text-white w-[30%] flex items-center justify-center text-center">
                 <p>Lees meer</p>
            </div>
        </div>
      </div>

    </div>
  );
}
